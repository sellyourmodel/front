<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191023061115 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE users_payments_orders ADD product_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE users_payments_orders ADD CONSTRAINT FK_10F99C044584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
        $this->addSql('CREATE INDEX IDX_10F99C044584665A ON users_payments_orders (product_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE users_payments_orders DROP FOREIGN KEY FK_10F99C044584665A');
        $this->addSql('DROP INDEX IDX_10F99C044584665A ON users_payments_orders');
        $this->addSql('ALTER TABLE users_payments_orders DROP product_id');
    }
}
