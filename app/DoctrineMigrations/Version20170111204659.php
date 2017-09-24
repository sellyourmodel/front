<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170111204659 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE media__gallery (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, context VARCHAR(64) NOT NULL, default_format VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media__gallery_media (id INT AUTO_INCREMENT NOT NULL, gallery_id INT DEFAULT NULL, media_id INT DEFAULT NULL, position INT NOT NULL, enabled TINYINT(1) NOT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_80D4C5414E7AF8F (gallery_id), INDEX IDX_80D4C541EA9FDD75 (media_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media__media (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, enabled TINYINT(1) NOT NULL, provider_name VARCHAR(255) NOT NULL, provider_status INT NOT NULL, provider_reference VARCHAR(255) NOT NULL, provider_metadata LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', width INT DEFAULT NULL, height INT DEFAULT NULL, length NUMERIC(10, 0) DEFAULT NULL, content_type VARCHAR(255) DEFAULT NULL, content_size INT DEFAULT NULL, copyright VARCHAR(255) DEFAULT NULL, author_name VARCHAR(255) DEFAULT NULL, context VARCHAR(64) DEFAULT NULL, cdn_is_flushable TINYINT(1) DEFAULT NULL, cdn_flush_identifier VARCHAR(64) DEFAULT NULL, cdn_flush_at DATETIME DEFAULT NULL, cdn_status INT DEFAULT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(255) NOT NULL, username_canonical VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, email_canonical VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, salt VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, last_login DATETIME DEFAULT NULL, locked TINYINT(1) NOT NULL, expired TINYINT(1) NOT NULL, expires_at DATETIME DEFAULT NULL, confirmation_token VARCHAR(255) DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', credentials_expired TINYINT(1) NOT NULL, credentials_expire_at DATETIME DEFAULT NULL, name VARCHAR(255) DEFAULT NULL, f VARCHAR(255) DEFAULT NULL, i VARCHAR(255) DEFAULT NULL, o VARCHAR(255) DEFAULT NULL, postal_code VARCHAR(255) DEFAULT NULL, address VARCHAR(255) DEFAULT NULL, phone VARCHAR(255) DEFAULT NULL, user_type VARCHAR(255) DEFAULT NULL, facebook_id VARCHAR(255) DEFAULT NULL, facebook_access_token VARCHAR(255) DEFAULT NULL, vkontakte_id VARCHAR(255) DEFAULT NULL, vkontakte_access_token VARCHAR(255) DEFAULT NULL, odnoklassniki_id VARCHAR(255) DEFAULT NULL, odnoklassniki_access_token VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_1483A5E992FC23A8 (username_canonical), UNIQUE INDEX UNIQ_1483A5E9A0D96FBF (email_canonical), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE articles (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, date DATE NOT NULL, preview LONGTEXT DEFAULT NULL, text LONGTEXT DEFAULT NULL, active TINYINT(1) NOT NULL, INDEX IDX_BFDD31683DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE banners (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, name2 VARCHAR(255) NOT NULL, link VARCHAR(255) DEFAULT NULL, INDEX IDX_250F25683DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE catalog_categories (id INT AUTO_INCREMENT NOT NULL, parent_id INT DEFAULT NULL, pos INT NOT NULL, name VARCHAR(255) NOT NULL, text LONGTEXT DEFAULT NULL, active TINYINT(1) NOT NULL, INDEX IDX_8FD9B4B3727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE news (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, date DATE NOT NULL, preview LONGTEXT DEFAULT NULL, text LONGTEXT DEFAULT NULL, active TINYINT(1) NOT NULL, INDEX IDX_1DD399503DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE catalog_products (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, image_id INT DEFAULT NULL, category_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, date DATETIME NOT NULL, text LONGTEXT DEFAULT NULL, active TINYINT(1) NOT NULL, INDEX IDX_816D8444A76ED395 (user_id), INDEX IDX_816D84443DA5256D (image_id), INDEX IDX_816D844412469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE catalog_products_images (id INT AUTO_INCREMENT NOT NULL, product_id INT DEFAULT NULL, image_id INT DEFAULT NULL, pos INT NOT NULL, INDEX IDX_180E3CEF4584665A (product_id), INDEX IDX_180E3CEF3DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE settings (id INT AUTO_INCREMENT NOT NULL, email_sender VARCHAR(255) NOT NULL, email_email VARCHAR(255) NOT NULL, email_admin VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE slider (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, link VARCHAR(255) DEFAULT NULL, active TINYINT(1) NOT NULL, INDEX IDX_CFC710073DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subscribes (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, date DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE text_pages (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, text LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE media__gallery_media ADD CONSTRAINT FK_80D4C5414E7AF8F FOREIGN KEY (gallery_id) REFERENCES media__gallery (id)');
        $this->addSql('ALTER TABLE media__gallery_media ADD CONSTRAINT FK_80D4C541EA9FDD75 FOREIGN KEY (media_id) REFERENCES media__media (id)');
        $this->addSql('ALTER TABLE articles ADD CONSTRAINT FK_BFDD31683DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id)');
        $this->addSql('ALTER TABLE banners ADD CONSTRAINT FK_250F25683DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id)');
        $this->addSql('ALTER TABLE catalog_categories ADD CONSTRAINT FK_8FD9B4B3727ACA70 FOREIGN KEY (parent_id) REFERENCES catalog_categories (id)');
        $this->addSql('ALTER TABLE news ADD CONSTRAINT FK_1DD399503DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id)');
        $this->addSql('ALTER TABLE catalog_products ADD CONSTRAINT FK_816D8444A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE catalog_products ADD CONSTRAINT FK_816D84443DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE catalog_products ADD CONSTRAINT FK_816D844412469DE2 FOREIGN KEY (category_id) REFERENCES catalog_categories (id)');
        $this->addSql('ALTER TABLE catalog_products_images ADD CONSTRAINT FK_180E3CEF4584665A FOREIGN KEY (product_id) REFERENCES catalog_products (id)');
        $this->addSql('ALTER TABLE catalog_products_images ADD CONSTRAINT FK_180E3CEF3DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE slider ADD CONSTRAINT FK_CFC710073DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE media__gallery_media DROP FOREIGN KEY FK_80D4C5414E7AF8F');
        $this->addSql('ALTER TABLE media__gallery_media DROP FOREIGN KEY FK_80D4C541EA9FDD75');
        $this->addSql('ALTER TABLE articles DROP FOREIGN KEY FK_BFDD31683DA5256D');
        $this->addSql('ALTER TABLE banners DROP FOREIGN KEY FK_250F25683DA5256D');
        $this->addSql('ALTER TABLE news DROP FOREIGN KEY FK_1DD399503DA5256D');
        $this->addSql('ALTER TABLE catalog_products DROP FOREIGN KEY FK_816D84443DA5256D');
        $this->addSql('ALTER TABLE catalog_products_images DROP FOREIGN KEY FK_180E3CEF3DA5256D');
        $this->addSql('ALTER TABLE slider DROP FOREIGN KEY FK_CFC710073DA5256D');
        $this->addSql('ALTER TABLE catalog_products DROP FOREIGN KEY FK_816D8444A76ED395');
        $this->addSql('ALTER TABLE catalog_categories DROP FOREIGN KEY FK_8FD9B4B3727ACA70');
        $this->addSql('ALTER TABLE catalog_products DROP FOREIGN KEY FK_816D844412469DE2');
        $this->addSql('ALTER TABLE catalog_products_images DROP FOREIGN KEY FK_180E3CEF4584665A');
        $this->addSql('DROP TABLE media__gallery');
        $this->addSql('DROP TABLE media__gallery_media');
        $this->addSql('DROP TABLE media__media');
        $this->addSql('DROP TABLE users');
        $this->addSql('DROP TABLE articles');
        $this->addSql('DROP TABLE banners');
        $this->addSql('DROP TABLE catalog_categories');
        $this->addSql('DROP TABLE news');
        $this->addSql('DROP TABLE catalog_products');
        $this->addSql('DROP TABLE catalog_products_images');
        $this->addSql('DROP TABLE settings');
        $this->addSql('DROP TABLE slider');
        $this->addSql('DROP TABLE subscribes');
        $this->addSql('DROP TABLE text_pages');
    }
}
