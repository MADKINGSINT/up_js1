"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  albums: [
    {
      title: "Альбом 1",
      artist: "Исполнитель 1",
      year: "2020"
    },
    {
      title: "Альбом 2",
      artist: "Исполнитель 2",
      year: "2015"
    },
    {
      title: "Альбом 3",
      artist: "Исполнитель 3",
      year: "2021"
    }
  ],
  
  [Symbol.iterator]() {
    let currentIndex = 0;
    const albums = this.albums;
    
    return {
      next() {
        if (currentIndex < albums.length) {
          const album = albums[currentIndex++];
          const albumInfo = `${album.title} - ${album.artist} (${album.year})`;
          return { value: albumInfo, done: false };
  } 
        else {
          return { done: true };
        }
      }
    };
  }
};

for (const album of musicCollection) {
  console.log(album);
}
