<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190504123847 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE tracker_tasks_logs (id INT AUTO_INCREMENT NOT NULL, ticket_id INT DEFAULT NULL, user_id INT DEFAULT NULL, text LONGTEXT DEFAULT NULL, date DATETIME NOT NULL, INDEX IDX_DBDD0A67700047D2 (ticket_id), INDEX IDX_DBDD0A67A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tracker_tasks (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, product_id INT DEFAULT NULL, date DATETIME NOT NULL, date_update DATETIME NOT NULL, status VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, text LONGTEXT DEFAULT NULL, INDEX IDX_40AAE17CA76ED395 (user_id), INDEX IDX_40AAE17C4584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tracker_tasks_comments (id INT AUTO_INCREMENT NOT NULL, ticket_id INT DEFAULT NULL, user_id INT DEFAULT NULL, text LONGTEXT DEFAULT NULL, date DATETIME NOT NULL, INDEX IDX_C4304038700047D2 (ticket_id), INDEX IDX_C4304038A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE tracker_tasks_logs ADD CONSTRAINT FK_DBDD0A67700047D2 FOREIGN KEY (ticket_id) REFERENCES tracker_tasks (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tracker_tasks_logs ADD CONSTRAINT FK_DBDD0A67A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE tracker_tasks ADD CONSTRAINT FK_40AAE17CA76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE tracker_tasks ADD CONSTRAINT FK_40AAE17C4584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE tracker_tasks_comments ADD CONSTRAINT FK_C4304038700047D2 FOREIGN KEY (ticket_id) REFERENCES tracker_tasks (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tracker_tasks_comments ADD CONSTRAINT FK_C4304038A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE tracker_tasks_logs DROP FOREIGN KEY FK_DBDD0A67700047D2');
        $this->addSql('ALTER TABLE tracker_tasks_comments DROP FOREIGN KEY FK_C4304038700047D2');
        $this->addSql('DROP TABLE tracker_tasks_logs');
        $this->addSql('DROP TABLE tracker_tasks');
        $this->addSql('DROP TABLE tracker_tasks_comments');
    }
}
