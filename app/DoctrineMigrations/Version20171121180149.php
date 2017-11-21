<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20171121180149 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE banners_index ADD icon_id INT DEFAULT NULL, ADD bg_id INT DEFAULT NULL, ADD `desc` VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE banners_index ADD CONSTRAINT FK_8128328354B9D732 FOREIGN KEY (icon_id) REFERENCES media__media (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE banners_index ADD CONSTRAINT FK_812832831A2100A8 FOREIGN KEY (bg_id) REFERENCES media__media (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX IDX_8128328354B9D732 ON banners_index (icon_id)');
        $this->addSql('CREATE INDEX IDX_812832831A2100A8 ON banners_index (bg_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE banners_index DROP FOREIGN KEY FK_8128328354B9D732');
        $this->addSql('ALTER TABLE banners_index DROP FOREIGN KEY FK_812832831A2100A8');
        $this->addSql('DROP INDEX IDX_8128328354B9D732 ON banners_index');
        $this->addSql('DROP INDEX IDX_812832831A2100A8 ON banners_index');
        $this->addSql('ALTER TABLE banners_index DROP icon_id, DROP bg_id, DROP `desc`');
    }
}
