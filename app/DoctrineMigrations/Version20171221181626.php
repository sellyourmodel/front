<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20171221181626 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE catalog_products_tags DROP FOREIGN KEY FK_9F46CAA14584665A');
        $this->addSql('ALTER TABLE catalog_products_tags ADD CONSTRAINT FK_9F46CAA14584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE catalog_products_software DROP FOREIGN KEY FK_32921EDC4584665A');
        $this->addSql('ALTER TABLE catalog_products_software ADD CONSTRAINT FK_32921EDC4584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id) ON DELETE CASCADE');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE catalog_products_software DROP FOREIGN KEY FK_32921EDC4584665A');
        $this->addSql('ALTER TABLE catalog_products_software ADD CONSTRAINT FK_32921EDC4584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
        $this->addSql('ALTER TABLE catalog_products_tags DROP FOREIGN KEY FK_9F46CAA14584665A');
        $this->addSql('ALTER TABLE catalog_products_tags ADD CONSTRAINT FK_9F46CAA14584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
    }
}
