<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20181208205031 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE notify ADD product_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE notify ADD CONSTRAINT FK_217BEDC84584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
        $this->addSql('CREATE INDEX IDX_217BEDC84584665A ON notify (product_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE notify DROP FOREIGN KEY FK_217BEDC84584665A');
        $this->addSql('DROP INDEX IDX_217BEDC84584665A ON notify');
        $this->addSql('ALTER TABLE notify DROP product_id');
    }
}
