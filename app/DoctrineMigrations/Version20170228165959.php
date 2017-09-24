<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170228165959 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE catalog_products_software (product_id INT NOT NULL, software_id INT NOT NULL, INDEX IDX_32921EDC4584665A (product_id), INDEX IDX_32921EDCD7452741 (software_id), PRIMARY KEY(product_id, software_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE software (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, active TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE catalog_products_software ADD CONSTRAINT FK_32921EDC4584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
        $this->addSql('ALTER TABLE catalog_products_software ADD CONSTRAINT FK_32921EDCD7452741 FOREIGN KEY (software_id) REFERENCES software (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE catalog_products_software DROP FOREIGN KEY FK_32921EDCD7452741');
        $this->addSql('DROP TABLE catalog_products_software');
        $this->addSql('DROP TABLE software');
    }
}
