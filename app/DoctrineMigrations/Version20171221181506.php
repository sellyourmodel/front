<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20171221181506 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE catalog_products_comments DROP FOREIGN KEY FK_1ADCE0394584665A');
        $this->addSql('ALTER TABLE catalog_products_comments ADD CONSTRAINT FK_1ADCE0394584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE catalog_products_favorites DROP FOREIGN KEY FK_6092635D4584665A');
        $this->addSql('ALTER TABLE catalog_products_favorites ADD CONSTRAINT FK_6092635D4584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE catalog_products_images DROP FOREIGN KEY FK_180E3CEF4584665A');
        $this->addSql('ALTER TABLE catalog_products_images ADD CONSTRAINT FK_180E3CEF4584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE catalog_products_likes DROP FOREIGN KEY FK_3AE6A2A04584665A');
        $this->addSql('ALTER TABLE catalog_products_likes ADD CONSTRAINT FK_3AE6A2A04584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id) ON DELETE CASCADE');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE catalog_products_comments DROP FOREIGN KEY FK_1ADCE0394584665A');
        $this->addSql('ALTER TABLE catalog_products_comments ADD CONSTRAINT FK_1ADCE0394584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
        $this->addSql('ALTER TABLE catalog_products_favorites DROP FOREIGN KEY FK_6092635D4584665A');
        $this->addSql('ALTER TABLE catalog_products_favorites ADD CONSTRAINT FK_6092635D4584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
        $this->addSql('ALTER TABLE catalog_products_images DROP FOREIGN KEY FK_180E3CEF4584665A');
        $this->addSql('ALTER TABLE catalog_products_images ADD CONSTRAINT FK_180E3CEF4584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
        $this->addSql('ALTER TABLE catalog_products_likes DROP FOREIGN KEY FK_3AE6A2A04584665A');
        $this->addSql('ALTER TABLE catalog_products_likes ADD CONSTRAINT FK_3AE6A2A04584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
    }
}
