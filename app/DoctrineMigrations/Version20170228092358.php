<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170228092358 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE users ADD image_id INT DEFAULT NULL, ADD country_id INT DEFAULT NULL, ADD gender VARCHAR(255) DEFAULT NULL, ADD languages LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', ADD specialization VARCHAR(255) DEFAULT NULL, ADD city VARCHAR(255) DEFAULT NULL, ADD text LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE users ADD CONSTRAINT FK_1483A5E93DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE users ADD CONSTRAINT FK_1483A5E9F92F3E70 FOREIGN KEY (country_id) REFERENCES countries (id) ON DELETE SET NULL');
        $this->addSql('UPDATE users SET languages="a:0:{}"');
        $this->addSql('CREATE INDEX IDX_1483A5E93DA5256D ON users (image_id)');
        $this->addSql('CREATE INDEX IDX_1483A5E9F92F3E70 ON users (country_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE users DROP FOREIGN KEY FK_1483A5E93DA5256D');
        $this->addSql('ALTER TABLE users DROP FOREIGN KEY FK_1483A5E9F92F3E70');
        $this->addSql('DROP INDEX IDX_1483A5E93DA5256D ON users');
        $this->addSql('DROP INDEX IDX_1483A5E9F92F3E70 ON users');
        $this->addSql('ALTER TABLE users DROP image_id, DROP country_id, DROP gender, DROP languages, DROP specialization, DROP city, DROP text');
    }
}
