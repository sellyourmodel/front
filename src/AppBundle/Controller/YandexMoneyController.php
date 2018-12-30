<?php

namespace AppBundle\Controller;

use AppBundle\Entity\PaymentLog;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use WP\ReshatelBundle\Entity\OrderNotification;

class YandexMoneyController extends Controller
{
    /**
     * @Route("/yandex_kassa/check_order")
     * @Template()
     */
    public function checkAction()
    {

        $orderId = $this->get('request')->get('orderNumber');
        $invoiceId = $this->get('request')->get('invoiceId');
        $orderSumAmount = $this->get('request')->get('orderSumAmount');

        $order = $this->getDoctrine()->getRepository('AppBundle:PaymentOrder')->find($orderId);

        if (!$order) {
            $code = 100;
            $message = "Заказ не найден";
        } elseif ($order->getPrice() <> $orderSumAmount) {
            $code = 100;
            $message = "Сумма платежа не верна";
        }else {
            $code = 0;
            $message = "";
        }

        return [
            "orderId" => $orderId,
            "invoiceId" => $invoiceId,
            "code" => $code,
            "message" => $message,
            "date" => date(DATE_ATOM)
        ];
    }

    /**
     * @Route("/yandex_kassa/payment_aviso")
     * @Template()
     */
    public function avisoAction()
    {

        $em = $this->getDoctrine()->getManager();

        $orderId = $this->get('request')->get('orderNumber');
        $invoiceId = $this->get('request')->get('invoiceId');

        $order = $this->getDoctrine()->getRepository('AppBundle:PaymentOrder')->find($orderId);

        if ($order) {

            $order->setFinished(true);
            $order->setFinishedDate(new \DateTime());

            $em->flush($order);

            $user = $order->getUser();

            $log = new PaymentLog();
            $log->setName('Пополнение баланса, заказ №'.$order->getId());
            $log->setDate(new \DateTime());
            $log->setUser($user);
            $log->setPrice($order->getPrice());
            $log->setType('payment');

            $em->persist($log);
            $em->flush($log);

            $models = $user->getModels();
            $models += $order->getCount();

            $user->setModels($models);

            if($order->getAccountBalanceSum()){
                $transaction = new PaymentLog();
                $transaction->setDate(new \DateTime());
                $transaction->setUser($user);
                $transaction->setPrice(-1 * $order->getAccountBalanceSum());
                $transaction->setName('Оплата заказа №"' . $order->getId() . '"');
                $transaction->setType('useaccountsum');

                $em->persist($transaction);
                $em->flush($transaction);

                $balance = 0;
                $payments = $em->getRepository('AppBundle:PaymentLog')->findBy(["user" => $user]);
                foreach ($payments as $e) {
                    $balance += $e->getPrice();
                }

                $user->setBalance($balance);
            }

            $em->flush($user);

            $this->get("fos_user.user_manager")->updateUser($user);

        }

        return [
            "orderId" => $orderId,
            "invoiceId" => $invoiceId,
            "date" => date(DATE_ATOM)
        ];
    }
}
