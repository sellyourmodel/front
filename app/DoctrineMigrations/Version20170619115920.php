<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170619115920 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE notify (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, date DATETIME NOT NULL, preview LONGTEXT DEFAULT NULL, text LONGTEXT DEFAULT NULL, active TINYINT(1) NOT NULL, INDEX IDX_217BEDC83DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE notify ADD CONSTRAINT FK_217BEDC83DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id)');
        $this->addSql('ALTER TABLE articles ADD views INT NOT NULL, ADD comments INT NOT NULL, ADD stars INT NOT NULL');
        $this->addSql('ALTER TABLE catalog_categories ADD alias VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE catalog_products ADD alias VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE users ADD last_notify_view INT NOT NULL');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE notify');
        $this->addSql('ALTER TABLE articles DROP views, DROP comments, DROP stars');
        $this->addSql('ALTER TABLE catalog_categories DROP alias');
        $this->addSql('ALTER TABLE catalog_products DROP alias');
        $this->addSql('ALTER TABLE users DROP last_notify_view');
    }
}
