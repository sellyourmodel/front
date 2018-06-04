<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180604124410 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE notify DROP FOREIGN KEY FK_217BEDC83DA5256D');
        $this->addSql('DROP INDEX IDX_217BEDC83DA5256D ON notify');
        $this->addSql('ALTER TABLE notify DROP preview, CHANGE image_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE notify ADD CONSTRAINT FK_217BEDC8A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_217BEDC8A76ED395 ON notify (user_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE notify DROP FOREIGN KEY FK_217BEDC8A76ED395');
        $this->addSql('DROP INDEX IDX_217BEDC8A76ED395 ON notify');
        $this->addSql('ALTER TABLE notify ADD preview LONGTEXT DEFAULT NULL COLLATE utf8_unicode_ci, CHANGE user_id image_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE notify ADD CONSTRAINT FK_217BEDC83DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id)');
        $this->addSql('CREATE INDEX IDX_217BEDC83DA5256D ON notify (image_id)');
    }
}
