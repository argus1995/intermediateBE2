CREATE DATABASE `edu_course`;

CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tb_order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `tgl` date DEFAULT NULL,
  `total_harga` int DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_order_user` (`user_id`),
  CONSTRAINT `fk_order_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pembayaran` (
  `pembayaran_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `metode` varchar(20) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `tgl_bayar` date DEFAULT NULL,
  PRIMARY KEY (`pembayaran_id`),
  UNIQUE KEY `order_id` (`order_id`),
  CONSTRAINT `fk_order_pembayaran` FOREIGN KEY (`order_id`) REFERENCES `tb_order` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tutor` (
  `tutor_id` int NOT NULL AUTO_INCREMENT,
  `nama_tutor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`tutor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `kategori_kelas` (
  `kategori_id` int NOT NULL AUTO_INCREMENT,
  `nama_kategori` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`kategori_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `kelas` (
  `kelas_id` int NOT NULL AUTO_INCREMENT,
  `nama_kelas` varchar(100) DEFAULT NULL,
  `kategori_id` int DEFAULT NULL,
  `tutor_id` int DEFAULT NULL,
  `harga` int DEFAULT NULL,
  PRIMARY KEY (`kelas_id`),
  KEY `tutor_id` (`tutor_id`),
  KEY `kategori_id` (`kategori_id`),
  CONSTRAINT `kelas_ibfk_1` FOREIGN KEY (`tutor_id`) REFERENCES `tutor` (`tutor_id`),
  CONSTRAINT `kelas_ibfk_2` FOREIGN KEY (`kategori_id`) REFERENCES `kategori_kelas` (`kategori_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `detail_order` (
  `detail_order_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `kelas_id` int DEFAULT NULL,
  PRIMARY KEY (`detail_order_id`),
  KEY `order_id` (`order_id`),
  KEY `kelas_id` (`kelas_id`),
  CONSTRAINT `detail_order_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `tb_order` (`order_id`),
  CONSTRAINT `detail_order_ibfk_2` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`kelas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `kelas_saya` (
  `kelas_saya_id` int NOT NULL AUTO_INCREMENT,
  `progres` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `kelas_id` int DEFAULT NULL,
  PRIMARY KEY (`kelas_saya_id`),
  KEY `user_id` (`user_id`),
  KEY `kelas_id` (`kelas_id`),
  CONSTRAINT `kelas_saya_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `kelas_saya_ibfk_2` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`kelas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `review` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `rating` int DEFAULT NULL,
  `komentar` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `kelas_id` int DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  KEY `user_id` (`user_id`),
  KEY `kelas_id` (`kelas_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`kelas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pretest` (
  `pretest_id` int NOT NULL AUTO_INCREMENT,
  `kelas_id` int DEFAULT NULL,
  `soal` text,
  `jawaban` text,
  PRIMARY KEY (`pretest_id`),
  KEY `kelas_id` (`kelas_id`),
  CONSTRAINT `pretest_ibfk_1` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`kelas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `modul_kelas` (
  `modul_id` int NOT NULL AUTO_INCREMENT,
  `judul_modul` varchar(50) DEFAULT NULL,
  `urutan` int DEFAULT NULL,
  `kelas_id` int DEFAULT NULL,
  PRIMARY KEY (`modul_id`),
  KEY `kelas_id` (`kelas_id`),
  CONSTRAINT `modul_kelas_ibfk_1` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`kelas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `material` (
  `material_id` int NOT NULL AUTO_INCREMENT,
  `modul_id` int DEFAULT NULL,
  `tipe` varchar(20) DEFAULT NULL,
  `konten` text,
  PRIMARY KEY (`material_id`),
  KEY `modul_id` (`modul_id`),
  CONSTRAINT `material_ibfk_1` FOREIGN KEY (`modul_id`) REFERENCES `modul_kelas` (`modul_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;