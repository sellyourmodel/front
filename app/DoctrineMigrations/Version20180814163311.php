<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180814163311 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE messages_dialogs (id INT AUTO_INCREMENT NOT NULL, from_id INT DEFAULT NULL, to_id INT DEFAULT NULL, date DATETIME NOT NULL, name VARCHAR(255) DEFAULT NULL, text LONGTEXT DEFAULT NULL, INDEX IDX_A15CFA7C78CED90B (from_id), INDEX IDX_A15CFA7C30354A65 (to_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messages (id INT AUTO_INCREMENT NOT NULL, from_id INT NOT NULL, to_id INT NOT NULL, date DATETIME NOT NULL, text LONGTEXT DEFAULT NULL, is_read TINYINT(1) NOT NULL, INDEX IDX_DB021E9678CED90B (from_id), INDEX IDX_DB021E9630354A65 (to_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE messages_dialogs ADD CONSTRAINT FK_A15CFA7C78CED90B FOREIGN KEY (from_id) REFERENCES users (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE messages_dialogs ADD CONSTRAINT FK_A15CFA7C30354A65 FOREIGN KEY (to_id) REFERENCES users (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE messages ADD CONSTRAINT FK_DB021E9678CED90B FOREIGN KEY (from_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE messages ADD CONSTRAINT FK_DB021E9630354A65 FOREIGN KEY (to_id) REFERENCES users (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE messages_dialogs');
        $this->addSql('DROP TABLE messages');
    }
}
