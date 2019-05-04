<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190504125910 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE tracker_tasks ADD responsible_id INT DEFAULT NULL, ADD watcher_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tracker_tasks ADD CONSTRAINT FK_40AAE17C602AD315 FOREIGN KEY (responsible_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE tracker_tasks ADD CONSTRAINT FK_40AAE17CC300AB5D FOREIGN KEY (watcher_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_40AAE17C602AD315 ON tracker_tasks (responsible_id)');
        $this->addSql('CREATE INDEX IDX_40AAE17CC300AB5D ON tracker_tasks (watcher_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE tracker_tasks DROP FOREIGN KEY FK_40AAE17C602AD315');
        $this->addSql('ALTER TABLE tracker_tasks DROP FOREIGN KEY FK_40AAE17CC300AB5D');
        $this->addSql('DROP INDEX IDX_40AAE17C602AD315 ON tracker_tasks');
        $this->addSql('DROP INDEX IDX_40AAE17CC300AB5D ON tracker_tasks');
        $this->addSql('ALTER TABLE tracker_tasks DROP responsible_id, DROP watcher_id');
    }
}
