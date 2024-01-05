---
title: "05 Januari 2024"
date: 2024-01-05T23:40:17+07:00
draft: false
tags: ["30haribercerita", "30hbc"]
---

![Kerja Malam](https://t3.ftcdn.net/jpg/02/05/30/20/360_F_205302068_DiTlGgS10pUylfDfsk9lGsiyXw82iKCm.jpg)

# Literasi


Biasanya kalau hari jumat begini, suasana pekerjaan terasa cukup santai dan ceria karena sudah menjelang weekend. Tapi jumat kali ini terasa cukup _challenging_, hari senin besok saya diminta untuk rilis suatu fitur yang sebenarnya cukup simple akan tetapi memiliki kegunaan yang cukup banyak. Fitur tersebut adalah kubernetes probes. Singkatnya, kubernetes probes digunakan agar suatu sistem tidak ngelag ketika ada _scaling_.

Pada hari ini sebenarnya fitur tersebut sudah selesai saya kerjakan dan sudah berhasil saya coba di komputer saya. Akan tetapi saya memiliki keraguan untuk rilis hari senin, karena saya belum mencoba pada environment staging.

Hari sudah menunjukkan pukul 10 pagi, artinya saya memiliki waktu 7 jam lagi untuk memastikan apakah fitur tersebut siap rilis pada hari senin. Sekitar jam setengah 11 saya mencoba test lagi apakah fitur tersebut berjalan atau tidak, ternyata tidak berjalan di komputer saya \:). duarr, vibes ceria yang ada pada hari jumat langsung hilang seketika. saya mencoba untuk mencari dimana akar masalahnya.

Tidak terasa waktu sudah menunjukkan pukul 11.15, artinya sudah waktunya untuk berangkat shalat jumat. Tepat saat perjalanan menuju masjid, ada laporan dari QA kalau mereka menemukan suatu issue yang cukup critical. Bertambah satu lagi pikiran saya. Benar saja, setelah selesai shalat jumat sekitar pukul 1. Saya dan tim melakukan meet untuk mencari akar masalah dan penyelesaian dari issue tersebut.

Jam 3 sore, issue tersebut baru beres. Ya, artinya waktu saya untuk memastikan fitur yang saya kerjakan apakah sudah siap rilis senin besok tersisa 2 jam.

Fitur yang saya kerjakan ada pada aplikasi yang menggunakan java dan spring boot sebagai bahasa pemrogramannya. Seperti di tulisan saya sebelumnya, java adalah salah satu bahasa yang cukup saya benci. jadi mengerjakan fitur ini sebenarnya semacam _love hate relationship_. Saya mengerjakan fitur ini sampai tengah malam. Pukul set 4 sore, fitur yang saya kerjakan sudah berjalan dengan mulus. Tapi saya masih ragu kalau fitur ini sudah rilis di server staging (server untuk testing testing sebelum benar benar rilis).

Saya putuskan untuk menghubungi salah satu tim DevOps yang biasa menangani server. Saya berdiskusi cukup lama dengan beliau. Beliau memberi beberapa dokumentasi mengenai kubernetes probe di server. 

Saya iseng membaca salah satu dari dokumentasi tersebut. dan ternyata versi spring boot yang ada pada aplikasi yang saya kerjakan, sudah ada _built in_ fitur kubernetes probe. Saya pun bergegas mencoba pada aplikasi yang sudah rilis, dan memang ternyata fitur tersebut sudah ada. Pada momen itu, jumat yang rasanya kelabu dan suram, menjadi sangat cerah, sangat sangat cerah.

Tepat setelah itu saya langsung menghubungi lead saya, saya langsung sampaikan kalau senin depan saya pastika bisa rilis dan hanya perlu sedikit perubahan.

Sungguh penutup pekan yang cukup berkesan, dan mungkin salah satu yang tidak terlupakan.

Di hari itu saya belajar, 
>bahwa tidak semua masalah bisa diselesaikan dengan kemampuan teknis yang bagus, tapi bisa dengan kemampuan literasi yang bagus. 

Kalau pada saat itu saya tidak mau membaca dengan detil pada dokumentasi, mungkin saya masih diselimuti rasa takut dan tidak yakin pada fitur yang mau saya rilis