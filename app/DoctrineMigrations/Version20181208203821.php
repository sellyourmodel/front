<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20181208203821 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE notify ADD user2_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE notify ADD CONSTRAINT FK_217BEDC8441B8B65 FOREIGN KEY (user2_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_217BEDC8441B8B65 ON notify (user2_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE notify DROP FOREIGN KEY FK_217BEDC8441B8B65');
        $this->addSql('DROP INDEX IDX_217BEDC8441B8B65 ON notify');
        $this->addSql('ALTER TABLE notify DROP user2_id');
    }
}
