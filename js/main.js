function createPicture(url, likes, comments, description) {
  var picture = {
    url: url,
    description: description,
    likes: likes,
    comments: comments
  }

  return picture;
}

function createCommentator(avatar, message, name) {
    var commentator = {
    avatar: "img/avatar-{{i}}.svg.",
    message: "В целом всё неплохо. Но не всё.",
    name: "Артем"
  }

    return commentator;
}

var comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

for (var likes = 15; likes <= 200; likes++){

};

var names = [
  "Антон",
  "Маша",
  "Сергей",
  "Лиля",
  "Настя",
  "Саша"
];
