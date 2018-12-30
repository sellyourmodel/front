<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20181230133859 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE users_withdrawals ADD method_id INT DEFAULT NULL, DROP method');
        $this->addSql('ALTER TABLE users_withdrawals ADD CONSTRAINT FK_EA606BDD19883967 FOREIGN KEY (method_id) REFERENCES users_withdrawals_methods (id)');
        $this->addSql('CREATE INDEX IDX_EA606BDD19883967 ON users_withdrawals (method_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE users_withdrawals DROP FOREIGN KEY FK_EA606BDD19883967');
        $this->addSql('DROP INDEX IDX_EA606BDD19883967 ON users_withdrawals');
        $this->addSql('ALTER TABLE users_withdrawals ADD method VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, DROP method_id');
    }
}
