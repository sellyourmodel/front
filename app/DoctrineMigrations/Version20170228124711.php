<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170228124711 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE products_tags (product_id INT NOT NULL, tag_id INT NOT NULL, INDEX IDX_E3AB5A2C4584665A (product_id), INDEX IDX_E3AB5A2CBAD26311 (tag_id), PRIMARY KEY(product_id, tag_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_tags ADD CONSTRAINT FK_E3AB5A2C4584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
        $this->addSql('ALTER TABLE products_tags ADD CONSTRAINT FK_E3AB5A2CBAD26311 FOREIGN KEY (tag_id) REFERENCES tags (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE products_tags');
    }
}
