const menuSectionData = {
  1: [
    {
      id: 1,
      weight_type: "S",
      category_id: 1,
      image: "/uploads/e03c53e08a6f7ffb6040fa2194fba3be.png",
      unit: "Порция",
      title: "Эспрессо",
      description:
        "Эспрессо - кофейный напиток, который готовится пропусканием небольшого количества воды через спрессованную кофейную таблетку. Отличается ярким и насыщенным вкусом. Ощутимо бодрит и заряжает энергией. Для «смягчения» вкуса можно добавить немного сливок. Рекомендуется запить небольшим количеством воды. Является основой для приготовления всех кофейных напитков.",
      favorite: false,
      cost_small: 12,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 4,
      weight_type: "S-M-L",
      category_id: 1,
      image: "/uploads/e0c7802ccd99ea9cb00523631fdc61bf.png",
      unit: "",
      title: "Американо",
      description:
        "Американо - готовится на основе эспрессо (или доппио), который разбавляется определенным количеством горячей воды. Некрепкий напиток отличается умеренным содержанием кофеина и весьма мягким вкусом, что делает его одним из самых популярных современных напитков.",
      favorite: false,
      cost_small: 14,
      cost_medium: 25,
      cost_large: 32,
      filters: []
    },
    {
      id: 5,
      weight_type: "S-M-L",
      category_id: 1,
      image: "/uploads/6843dd616e17fafb1aee363581d62553.png",
      unit: "",
      title: "Американо с молоком",
      description:
        "Американо с молоком - классический американо с добавлением молока (холодного или подогретого). Вкус напитка становится еще более мягким, молоко убирает естественную кофейную горечь. Проявляется незначительная сладость. Низкое содержание кофеина приятно бодрит, улучшает настроение и работоспособность.",
      favorite: false,
      cost_small: 18,
      cost_medium: 26,
      cost_large: 32,
      filters: []
    },
    {
      id: 6,
      weight_type: "S-M-L",
      category_id: 1,
      image: "/uploads/470c68ddd0e5826e28418786f614bd8f.png",
      unit: "",
      title: "Капучино",
      description:
        "Капучино - любимая кофейно-молочная классика. В основе эспрессо с добавлением вспененного молока. Благодаря правильному соотношению кофе и молока, напиток приобретает более мягкий  сливочный вкус, ощущается легкая сладость и приятная кофейная горчинка. Порция капучино повышает настроение и замечательно бодрит. Капучино принято пить без добавок, но по желанию можно попробовать необычный вариант со сгущенным молоком,  сиропом или специями (например, кардамоном).",
      favorite: false,
      cost_small: 19,
      cost_medium: 26,
      cost_large: 32,
      filters: []
    },
    {
      id: 7,
      weight_type: "S-M-L",
      category_id: 1,
      image: "/uploads/43f0984212f91e7c6bd584d25996c396.png",
      unit: "",
      title: "Латте",
      description:
        "Латте - самый популярный кофейно-молочный напиток в мире. Отличается значительным объемом, большая часть – вспененное молоко, в которое аккуратно вливается эспрессо или доппио. Невероятно легкий и мягкий напиток. Латте – идеально подходит кофеманам, которые любят попробовать что-то новенькое. «Поиграть» со вкусами можно просто добавляя необычные сиропы (смородиновый, банановый, огуречный) или используя специи/добавки (корицу, шоколад, кокос).",
      favorite: false,
      cost_small: 20,
      cost_medium: 26,
      cost_large: 32,
      filters: []
    },
    {
      id: 8,
      weight_type: "S-M-L",
      category_id: 1,
      image: "/uploads/0ab6884b63bc0dde6fcfbda363c7f561.png",
      unit: "",
      title: "Раф кофе",
      description:
        "Раф кофе - горячий кофейный напиток на основе эспрессо с добавлением взбитых паром сливок. Главная фишка – яркий (но ненавязчивый) ванильный вкус. Раф достаточно сладкий и густой. Прекрасно согревает в холода и улучшает настроение.",
      favorite: false,
      cost_small: 26,
      cost_medium: 36,
      cost_large: 46,
      filters: []
    },
    {
      id: 9,
      weight_type: "S-M-L",
      category_id: 1,
      image: "/uploads/e12a2f8edd28fde13f241223dac5c814.png",
      unit: "",
      title: "Моккачино",
      description:
        "Моккачино - разновидность латте. Немного шоколада, взбитых сливок, какао или корицы сверху – и хорошее настроение гарантированно. Помогает быстро взбодриться и настроится на рабочую волну. Разнообразьте напиток, добавив в него немного маршмеллоу.",
      favorite: false,
      cost_small: 21,
      cost_medium: 30,
      cost_large: 36,
      filters: []
    },
    {
      id: 11,
      weight_type: "S-M-L",
      category_id: 1,
      image: "/uploads/b7bc1156644cbedc28717796a431b4ca.png",
      unit: "",
      title: "Горячий шоколад",
      description:
        "Горячий шоколад - питательный напиток, богатый полезными витаминами, улучшает настроение и повышает жизненный тонус. Благодаря своей насыщенной и обволакивающей консистенции, прекрасно согревает.  Лучшее «лекарство» от плохого настроения. Добавьте немного корицы и ванили – получите идеальный рождественский напиток.",
      favorite: false,
      cost_small: 28,
      cost_medium: 36,
      cost_large: 46,
      filters: []
    },
    {
      id: 12,
      weight_type: "M-L",
      category_id: 1,
      image: "/uploads/58e455bb26641a72a5530f8a5bbca366.png",
      unit: "",
      title: "Какао",
      description:
        "Какао - легкий шоколадный напиток на основе натурального какао-порошка. Вкусное и ароматное какао быстро согреет, улучшит настроение и заметно повысит работоспособность. Добавленная корица и ваниль лишь подчеркнут вкус. Но что действительно не станет лишним – дополнительная порция маршмеллоу (а лучше две).",
      favorite: false,
      cost_small: 0,
      cost_medium: 26,
      cost_large: 32,
      filters: []
    },
    {
      id: 2,
      weight_type: "",
      category_id: 1,
      image: "/uploads/6cd905f0edb31b19dc0fa1dc7b617fe9.png",
      unit: "Порция",
      title: "Лунго",
      description:
        "Лунго - одна из разновидностей эспрессо. Более длительный пролив (на стандартную закладку кофе) делает вкус менее насыщенным и при этом ощущается приятная горчинка. Содержание кофеина выше, чем в классическом эспрессо.",
      favorite: false,
      cost_small: 13,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 10,
      weight_type: "",
      category_id: 1,
      image: "/uploads/9ebadbb32e71114c6e165eae369af1b6.png",
      unit: "Порция",
      title: "Флэт Уайт",
      description:
        "Флэт Уайт - молочно-кофейный напиток, относительно недавно ставший классикой. В основе – двойная порция эспрессо, к которой добавляется слегка вспененное молоко. Пропорции молока к кофе позволяют сохранить оригинальный вкус кофе, в котором легко угадывается его качество, чувствуются все достоинства",
      favorite: false,
      cost_small: 26,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 3,
      weight_type: "",
      category_id: 1,
      image: "/uploads/04bf3efaad4a2128d687804c19c73b57.png",
      unit: "Порция",
      title: "Доппио",
      description:
        "Доппио - двойной эспрессо. Напиток с приятным сбалансированным вкусом. В виду двойной порции кофеина, доппио - лучший выбор в качестве утреннего кофе. Обеспечивает прилив бодрости, поднимает настроение и повышает производительность",
      favorite: false,
      cost_small: 23,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    }
  ],
  2: [
    {
      id: 34,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/ec534e383932c60b46718684e9f368e7.png",
      unit: "",
      title: "Ice Латте",
      description:
        "Ice Латте - легкий кофейный напиток со вкусом на выбор. Летняя версия любимого латте. Подбирайте вкус под ваше настроение. Обязательно попробуйте вариант с карамелью. Если хочется чего-то менее традиционного, то выбирайте малиновый сироп.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 35,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/46b0b900761dfa494ab422cc1bfa97f1.png",
      unit: "",
      title: "Ice Какао",
      description:
        "Ice Какао - невероятно освежающий и бодрящий молочно-шоколадный напиток с огромной порцией взбитых сливок. Для более яркого вкуса добавьте банановый, кокосовый, клубничный или смородиновый сироп.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 36,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/985bfe5db5ac8b321ea5b2e26b194e43.png",
      unit: "",
      title: "Фраппе",
      description:
        "Фраппе  - холодный кофейный напиток со вкусом на выбор. Мягкая и бархатная консистенция подарит невероятное удовольствие. Выбирайте – экспериментируйте со вкусами, дарите себе новые ощущения. Наш выбор: дыня, амаретто, кокос.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 38,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/b8abe76315a3f9f6ea5c01f3636c0504.png",
      unit: "",
      title: "Арома Нон-Стоп",
      description:
        "Арома Нон-Стоп - многослойный кофейный напиток с неповторимым освежающим вкусом, в котором преобладает приятная кислинка. Фирменный микс лучший выбор в  жару. Яркий и запоминающийся вид ничем не уступает потрясающему вкусу.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 39,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/2e3d95dd4ebae1f311a53b85afd7aaf7.png",
      unit: "",
      title: "Арома Оушен",
      description:
        "Арома Оушен - холодный газированный коктейль, без добавления кофе. Завораживающий и освежающий вкус, ненавязчивая сладость в сочетании с еле уловимой кислинкой лайма и киви. После первого глотка невероятно сложно остановиться.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 40,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/51569b3a5dd2c6dc6ca28e8f5eb3ec97.png",
      unit: "",
      title: "Мохито",
      description:
        "Мохито - освежающий напиток на основе мяты и лимона. Безалкогольная версия одного из самых популярных коктейлей в мире. Мягкий мятный вкус и немного лимона подарят наслаждение и долгожданную прохладу.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 31,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/84177a7d5169c30afab45f919891d41e.png",
      unit: "",
      title: "Смузи банан-клубника",
      description:
        "Смузи банан-клубника - освежающий сладкий напиток. Яркое сочетание любимых вкусов. Ничего лишнего – только порция витаминов и свежести. Густой, прохладный и бодрящий напиток быстро заставит забыть о жажде и голоде.",
      favorite: false,
      cost_small: 0,
      cost_medium: 29,
      cost_large: 35,
      filters: []
    },
    {
      id: 44,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/4130cae66d055ecd506bb2b5fbab4268.png",
      unit: "",
      title: "Лимонад имбирный",
      description:
        "Лимонад имбирный - полезный и вкусный напиток на основе свежего имбиря со вкусом груши. Сбалансированная острота прекрасно освежает и быстро приводит в тонус. Напиток замечательно утоляет жажду и дарит необходимый заряд бодрости.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 43,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/4cb90e19376e9a19a6042c6a3723b169.png",
      unit: "",
      title: "Лимонад ягодный",
      description:
        "Лимонад ягодный - напиток на основе клубники и малины. Яркий вкус и потрясающий аромат летних ягод освежает и поднимает настроение на весь день.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 42,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/49e1b68769fec4bda6498ced43dcf616.png",
      unit: "",
      title: "Лимонад цитрусовий",
      description:
        "Лимонад цитрусовий - напиток на основе апельсина и лимона. Вкусный лимонад замечательно утоляет жажду и освежает. Полезный и бодрящий напиток, подходящий для всей семьи.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 45,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/a04d65bb82a1b20d18a95b2c262c394c.png",
      unit: "",
      title: "Айс Ти мята",
      description:
        "Айс Ти мята - освежающий мятный напиток на основе черного или зеленого чая. Один из самых популярных летних напитков. Айс Ти прекрасно утоляет жажду, освежает и улучшает самочувствие.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 46,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/151df7c467c40abb32b12bf9bee00310.png",
      unit: "",
      title: "Айс Ти цитрус",
      description:
        "Айс Ти цитрус - освежающий цитрусовый напиток на основе черного или зеленого чая. Ничто не взбодрит лучше порции Айс Ти с добавлением свежих фруктов апельсина и лимона. Полезный напиток, который подарит заряд энергии и освежит в любую жару.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 47,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/907bd8fe6250f8edc903a8eb643a4c49.png",
      unit: "",
      title: "Айс Ти ягода",
      description:
        "Айс Ти ягода - освежающий напиток на основе чёрного/зеленого чая с добавлением клубники и малины. Великолепная альтернатива газировкам. Сладкие ягоды придают напитку особенный яркий вкус. В каждом глотке порция витаминов и хорошего настроения.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 51,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/69a361317f76f0d1f05c5ea00eb6c509.png",
      unit: "",
      title: "Молочный коктейль банан",
      description:
        "Молочный коктейль банан - питательный и освежающий напиток, который легко утолит как жажду, так и голод. Польза фруктов и молока в каждом глотке. Зарядит силой и охладит даже в самую невыносимую жару.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 52,
      weight_type: "M-L",
      category_id: 2,
      image: "/uploads/0ad39c2463ee82680f7b31e7b7ef9cd9.png",
      unit: "",
      title: "Молочный коктейль ваниль",
      description:
        "Молочный коктейль ваниль - напиток с классическим молочным вкусом и легкой ноткой ванили. Идеальный выбор для ценителей чистого вкуса. Бархатистая и густая текстура напитка утоляет жажду и освежает.",
      favorite: false,
      cost_small: 0,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 33,
      weight_type: "",
      category_id: 2,
      image: "/uploads/d641d9dba9834c6a4d5cdd3dccf554f7.png",
      unit: "Порция",
      title: "Фреш",
      description:
        "Фреш - свежевыжатый сок. Натуральный напиток без добавок. Порция здоровья и хорошего настроения, которая прекрасно утоляет жажду и освежает. Лучшая альтернатива пакетированному соку.",
      favorite: false,
      cost_small: 50,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    }
  ],
  3: [
    {
      id: 22,
      weight_type: "M-L",
      category_id: 3,
      image: "/uploads/2db158d1eac12811585466e180c365dc.png",
      unit: "",
      title: "Лавандовый",
      description:
        "Лавандовый - кофейно-молочный напиток с лавандовым вкусом. Яркая, но в то же время  нежная лаванда, подчеркивает богатый сливочный вкус напитка. Пряность лишь усиливает достоинства кофейного букета. Ароматный лавандовый кофе – напиток, который можно пить независимо от времени суток",
      favorite: false,
      cost_small: 0,
      cost_medium: 30,
      cost_large: 36,
      filters: []
    },
    {
      id: 14,
      weight_type: "M-L",
      category_id: 3,
      image: "/uploads/a4a20718014d6db188f0bd10451a4f6b.png",
      unit: "",
      title: "Борджия",
      description:
        "Борджия - согревающий кофейный напиток со взбитыми сливками, пряностями и ярко-выраженным цитрусовым ароматом. Прекрасное дополнение к холодным вечерам, поднимет настроение и радует незабываемым вкусом.",
      favorite: false,
      cost_small: 0,
      cost_medium: 30,
      cost_large: 36,
      filters: []
    },
    {
      id: 15,
      weight_type: "M-L",
      category_id: 3,
      image: "/uploads/2c1339e25a5585f252284889f24d3696.png",
      unit: "",
      title: "Латте Блю",
      description:
        "Латте Блю - кофейно-молочный напиток с необычным вкусом. Что может быть лучше латте? Подобная интерпретация всемирной классики явно удивит. В нем все безупречно – начиная от вида и заканчивая ярким вкусом.",
      favorite: false,
      cost_small: 0,
      cost_medium: 30,
      cost_large: 36,
      filters: []
    },
    {
      id: 16,
      weight_type: "M-L",
      category_id: 3,
      image: "/uploads/bc0b912c4b25ee05983c48bf9ebb23c1.png",
      unit: "",
      title: "Ред Леди",
      description:
        "Ред Леди - кофейно-молочный напиток с ярким вкусом. В этот кофе влюбляешься сразу и навсегда. Сладкий сливочно-шоколадный вкус, который сложно до конца разгадать. И в этом его прелесть.",
      favorite: false,
      cost_small: 0,
      cost_medium: 30,
      cost_large: 36,
      filters: []
    },
    {
      id: 17,
      weight_type: "M-L",
      category_id: 3,
      image: "/uploads/9ca74fdb564a15577fabcf423e922a8d.png",
      unit: "",
      title: "Шоколадное печенье",
      description:
        "Шоколадное печенье - кофейно-молочный напиток с выраженным шоколадным вкусом. Кофе в паре с добротной порцией шоколада, которая приятно взбодрит и повысит уровень гормонов счастья. Если нужно подпитать мозг чем-то вкусным, то выбор стоит остановить именно на этом напитке.",
      favorite: false,
      cost_small: 0,
      cost_medium: 30,
      cost_large: 36,
      filters: []
    },
    {
      id: 18,
      weight_type: "M-L",
      category_id: 3,
      image: "/uploads/36ee1f533462aedcd030c4cbd392aeb6.png",
      unit: "",
      title: "Чилли кофе",
      description:
        "Чилли кофе - кофейно-молочный напиток со вкусом чили. Лучший выбор для любителей бодрящего кофе и «острых» ощущений. Великолепно согревает в холодные вечера своим пикантным и нежным молочным вкусом.",
      favorite: false,
      cost_small: 0,
      cost_medium: 30,
      cost_large: 36,
      filters: []
    },
    {
      id: 19,
      weight_type: "M-L",
      category_id: 3,
      image: "/uploads/a5c240a3ae87f6f00b7f9eed97c95e5b.png",
      unit: "",
      title: "Нуга",
      description:
        "Нуга - кофейно-молочный напиток с ярким ореховым вкусом. Первый глоток дарит знакомые ощущение. Это вкус сладостей, шоколада, орешков и праздника – все, что мы так любим и что делает нас счастливее.",
      favorite: false,
      cost_small: 0,
      cost_medium: 30,
      cost_large: 36,
      filters: []
    },
    {
      id: 20,
      weight_type: "M-L",
      category_id: 3,
      image: "/uploads/c9fc888e7ec7fe731d1ba24219d2052d.png",
      unit: "",
      title: "Пинк",
      description:
        "Пинк - кофейно-молочный напиток с оригинальным сочетанием вкусов. Ярко и энергично, стильно и незаурядно. Один из самых оригинальных напитков, который только можно найти. Невероятный кофейно-молочный коктейль с фруктовым вкусом.",
      favorite: false,
      cost_small: 0,
      cost_medium: 30,
      cost_large: 36,
      filters: []
    },
    {
      id: 21,
      weight_type: "M-L",
      category_id: 3,
      image: "/uploads/315909c4af1499d6373d8d19cbef427b.png",
      unit: "",
      title: "Кофе по-венски",
      description:
        "Кофе по-венски - напиток готовится согласно традиционному австрийскому рецепту. Крепкий и насыщенный вкус эспрессо подчеркивается нежными взбитыми сливками. Легкий и бодрящий кофе, который задаст правильное настроение всему дню.",
      favorite: false,
      cost_small: 0,
      cost_medium: 30,
      cost_large: 36,
      filters: []
    }
  ],
  4: [
    {
      id: 111,
      weight_type: "",
      category_id: 4,
      image: "/uploads/95c19fc89b3dbbdeea169bbf9b438d7d.png",
      unit: "Порция",
      title: "Морковный",
      description:
        "Десерт Морковный – простой и нежный десерт с морковно-сливочным вкусом. Лучшее дополнение к чашке ароматного кофе. ",
      favorite: false,
      cost_small: 49,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 113,
      weight_type: "",
      category_id: 4,
      image: "/uploads/d5aeb949ad9b4767bf582bd247da2046.png",
      unit: "Порция",
      title: "Чизкейк",
      description:
        "Чизкейк - попробуйте представить идеальный десерт к кофе. И это будет чизкейк. Сочетание нежного творожного крем-сыра и кофе – признанная и безоговорочная классика.",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 114,
      weight_type: "",
      category_id: 4,
      image: "/uploads/dad62338c4e92581ac3536a39205e197.png",
      unit: "Порция",
      title: "Чизкейк английский",
      description:
        "Чизкейк английский - сладкий сырный десерт в удобном формате. Пирожное с невероятно нежным творожно-сливочным вкусом. Сытный и в меру сладкий десерт – великолепное дополнение к чашке кофе или чая.",
      favorite: false,
      cost_small: 39,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 115,
      weight_type: "",
      category_id: 4,
      image: "/uploads/643fd2a83a58d561d756d4d6d0c5934c.png",
      unit: "Порция",
      title: "Чизкейк со смородиной",
      description:
        "Чизкейк со смородиной - добавьте к классическому чизкейку немного смородиновой начинки и получите идеальный десерт. Интересный и яркий вкус, удачно сочетающий в себе сладость и приятную кислинку ягод смородины.",
      favorite: false,
      cost_small: 39,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 116,
      weight_type: "",
      category_id: 4,
      image: "/uploads/da6be553003bf937adbfea0aada32f7c.png",
      unit: "Порция",
      title: "Тирамису",
      description:
        "Тирамису - популярный итальянский десерт, который должен попробовать каждый. Неповторимое лакомство, идеально сочетающее в себе сливочный и кофейный вкусы. Наслаждаться им можно бесконечно",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 117,
      weight_type: "",
      category_id: 4,
      image: "/uploads/6fbec15a7346c62e616ceb0bd02078fc.png",
      unit: "Порция",
      title: "Панна-котта",
      description:
        "Панна-котта - много, очень много сливок и ванили. Один из лучших итальянских десертов. Легкое лакомство и само воплощение нежности. Ванильно-сливочная панна-кота – прекрасна, как дополнение к ароматному кофе, так и в качестве отдельного угощения.",
      favorite: false,
      cost_small: 30,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 118,
      weight_type: "",
      category_id: 4,
      image: "/uploads/ac7d5084b83673e5a0ce1a7a97eec44e.png",
      unit: "Порция",
      title: "Десерт кофейный",
      description:
        "Десерт кофейный  - нежный кофейно-сливочный десерт с шоколадной глазурью. Изысканный, легкий и оригинальный вкус скрасит любой день.",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 119,
      weight_type: "",
      category_id: 4,
      image: "/uploads/f1f930005004c0c13c76cce20227e9fd.png",
      unit: "Порция",
      title: "Наполеон",
      description:
        "Наполеон - любимый десерт, вкус которого знаком каждому с детства. Слоеный торт с аппетитной начинкой. Прекрасно борется, как с голодом, так и с плохим настроением.",
      favorite: false,
      cost_small: 30,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 120,
      weight_type: "",
      category_id: 4,
      image: "/uploads/dfef826ecaa51a47094d775bbb3d1120.png",
      unit: "Порция",
      title: "Эклер ванильный",
      description:
        "Эклер ванильный - нежный и воздушный десерт с заварным кремом. Сладкое лекарство от плохого настроения. Расслабляет и вдохновляет. Отличное дополнение к чашечке капучино или чая.",
      favorite: false,
      cost_small: 25,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 122,
      weight_type: "",
      category_id: 4,
      image: "/uploads/17dd753a7b49171dcd044d2493701ebc.png",
      unit: "Порция",
      title: "Эклер солёная карамель",
      description:
        "Эклер Соленая карамель – пирожное с оригинальным вкусом. Соленая карамель прекрасно дополняет чашечку черного сладкого кофе.",
      favorite: false,
      cost_small: 25,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 123,
      weight_type: "",
      category_id: 4,
      image: "/uploads/2ce8ada1c9d4b3e3920e5e7f1a66a0c9.png",
      unit: "Порция",
      title: "Тарт ягодный",
      description:
        "Тарт ягодный - песочный десерт с  ярким  вкусом. Пирог с восхитительной и невероятно нежной ягодно-сливочной начинкой. Самый летний десерт, который доступен в любой сезон.",
      favorite: false,
      cost_small: 30,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 124,
      weight_type: "",
      category_id: 4,
      image: "/uploads/25de786b0ae137a842df2b369b4edc19.png",
      unit: "Порция",
      title: "Тарт абрикосовый",
      description:
        "Тарт абрикосовый - песочный французский пирог с восхитительным фруктово-сливочным вкусом. Уникальный десерт, который сочетает в себе простоту, красоту и потрясающий вкус. Лучшей пары для утреннего кофе просто не найти.",
      favorite: false,
      cost_small: 30,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 128,
      weight_type: "",
      category_id: 4,
      image: "/uploads/939d926f8fe58556fe239d1bc707f7a9.png",
      unit: "Порция",
      title: "Кокосовое печенье",
      description:
        "Кокосовое печенье  - легкое дополнение к кофе. Воздушная текстура и умеренная сладость никоим образом не перебивают, а только подчеркивает вкус кофейного напитка. Удобный перекус теперь всегда под рукой.",
      favorite: false,
      cost_small: 25,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 129,
      weight_type: "",
      category_id: 4,
      image: "/uploads/4800c868ce3869a2af93a666a94c1da1.png",
      unit: "Порция",
      title: "Печенье финское с шоколадом",
      description:
        "Печенье финское с шоколадом - соленое песочное печенье с шоколадной прослойкой. Оригинальное сочетание соленого и сладкого призвано подчеркнуть и улучшить яркий вкус кофе. Удобный размер и формат, чтоб легкий перекус всегда был под рукой.",
      favorite: false,
      cost_small: 25,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 125,
      weight_type: "",
      category_id: 4,
      image: "/uploads/1b1b35e321c2dd5c15b5cb1b1aa3c79c.png",
      unit: "Порция",
      title: "Маффин со сгущенным молоком",
      description:
        "Маффин  со сгущенным молоком – сочный сладкий шоколадный кексик , который давно стал лучшим дополнением к утренней чашке кофе.",
      favorite: false,
      cost_small: 20,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 127,
      weight_type: "",
      category_id: 4,
      image: "/uploads/3ee688cac910a7ec0f359ead0a434145.png",
      unit: "Порция",
      title: "Маффин с кокосом",
      description:
        "Маффин с кокосом – сочный и сладкий кекс с нежным ванильно-кокосовым вкусом. Незаменимое лакомство к чашке кофе или чая. ",
      favorite: false,
      cost_small: 20,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 126,
      weight_type: "",
      category_id: 4,
      image: "/uploads/19e7b0ca1616b340e3764a8d0041e4f8.png",
      unit: "Порция",
      title: "Маффин с шоколадом",
      description:
        "Маффин с шоколадом – сладкий и сытный миникекс  с богатым шоколадным вкусом и приятной бархатной структурой. Лучшим образом дополнит чашку кофе или чая. ",
      favorite: false,
      cost_small: 20,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    }
  ],
  5: [
    {
      id: 23,
      weight_type: "M-L",
      category_id: 5,
      image: "/uploads/850f4d05260da0b7ad7393b5a53b4126.png",
      unit: "",
      title: "Фруктовое диско",
      description:
        "Фруктовое диско - чай с ярким вкусом летних фруктов и ягод. В летнюю жару быстро утолит жажду, зимой – согреет и подпитает витаминами. Вкус лета в каждом глотке для хорошего самочувствия и настроения.",
      favorite: false,
      cost_small: 0,
      cost_medium: 25,
      cost_large: 30,
      filters: []
    },
    {
      id: 24,
      weight_type: "M-L",
      category_id: 5,
      image: "/uploads/c2ff68ca248979d8f5e567a1f9ad2de1.png",
      unit: "",
      title: "Марокканский",
      description:
        "Марокканский - мятный пряный чай. Хорош тем, что он уместен в любое время года. Летом напиток подарит заряд свежести. А благодаря яркому мятно-лимонному вкусу с теплыми нотками корицы, он станет незаменимым для долгих зимних вечеров.",
      favorite: false,
      cost_small: 0,
      cost_medium: 25,
      cost_large: 30,
      filters: []
    },
    {
      id: 25,
      weight_type: "M-L",
      category_id: 5,
      image: "/uploads/8365abc387297e99bf08483e17a547ef.png",
      unit: "",
      title: "Имбирный",
      description:
        "Имбирный - чай с пряным ароматом и острым вкусом. Из-за особых свойств имбиря  напиток является чудесной альтернативой обычному чаю. Незамысловатый, но невероятно полезный зимний чай.",
      favorite: false,
      cost_small: 0,
      cost_medium: 25,
      cost_large: 30,
      filters: []
    },
    {
      id: 26,
      weight_type: "M-L",
      category_id: 5,
      image: "/uploads/6852b23a0cea8f1955acfcfa0ae528f2.png",
      unit: "",
      title: "Мандариновый",
      description:
        "Мандариновый - горячий и ароматный чай с ярким мандариновым вкусом. Полезный напиток с оригинальным вкусом. Одинаково хорош, как зимой, так и летом. Прекрасно утоляет жажду, заряжает энергией и заметно улучшает настроение.",
      favorite: false,
      cost_small: 0,
      cost_medium: 25,
      cost_large: 30,
      filters: []
    },
    {
      id: 27,
      weight_type: "M-L",
      category_id: 5,
      image: "/uploads/2e60dc32f32920a9c7704161af10997c.png",
      unit: "",
      title: "Цитрусовый пунш",
      description:
        "Цитрусовый пунш - пряный горячий напиток с ярким цитрусовым вкусом. Очень много полезных и ярких солнечных фруктов в сочетании с букетом пряностей отлично согреют и улучшат настроение. Настолько же полезно, как и вкусно",
      favorite: false,
      cost_small: 0,
      cost_medium: 25,
      cost_large: 30,
      filters: []
    },
    {
      id: 28,
      weight_type: "M-L",
      category_id: 5,
      image: "/uploads/a63252f9201ce749b8b56fc63da4a669.png",
      unit: "",
      title: "Relax",
      description:
        "Relax - чай, который поможет снять напряжение и расслабиться. Сила имбиря и трав успокоят, улучшает настроение и самочувствие. Лучший способ отдохнуть от повседневной суеты и привести мысли в порядок.",
      favorite: false,
      cost_small: 0,
      cost_medium: 25,
      cost_large: 30,
      filters: []
    },
    {
      id: 29,
      weight_type: "M-L",
      category_id: 5,
      image: "/uploads/91330712c07b5b0f676d426cbc1bb09b.png",
      unit: "",
      title: "Зимний",
      description:
        "Зимний - облепиховый чай. Напиток, богатый витамином С, незаменим для прохладных осенних и зимних вечеров. Быстро согревает, улучшает самочувствие и заставляет забыть обо всем негативе. Просто, вкусно и невероятно полезно.",
      favorite: false,
      cost_small: 0,
      cost_medium: 25,
      cost_large: 30,
      filters: []
    },
    {
      id: 30,
      weight_type: "M-L",
      category_id: 5,
      image: "/uploads/be3a327ecab5c3a1e34a7240fc0ea6d7.png",
      unit: "",
      title: "Глинтвейн б/а",
      description:
        "Глинтвейн б/а - горячий напиток. Как же еще греться долгими и холодными вечерами, если не чашечкой пряного глинтвейна. Идеальный баланс яркого фруктового вкуса и специй подарят ощущение уюта и тепла.",
      favorite: false,
      cost_small: 0,
      cost_medium: 25,
      cost_large: 35,
      filters: []
    }
  ],
  6: [
    {
      id: 86,
      weight_type: "",
      category_id: 6,
      image: "/uploads/0523ab6273dc3db65df95e75b0d5e44b.png",
      unit: "Порция",
      title: "Круассан с паштетом",
      description:
        "Круассан с паштетом - воздушный, легкий круассан с нежной паштетной начинкой – лучшее дополнение к чашке кофе. Простой и невероятно эффективный способ борьбы с голодом.",
      favorite: false,
      cost_small: 30,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 87,
      weight_type: "",
      category_id: 6,
      image: "/uploads/b22690b3ed3924800ea5f57ef2bb0d6b.png",
      unit: "Порция",
      title: "Круассан с моцареллой",
      description:
        "Круассан с моцареллой - только что выпеченный круассан, с хрустящей аппетитной корочкой и начинкой из самой нежной моцареллы, которая просто тает во рту. Если не это идеальный завтрак, то что?",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 88,
      weight_type: "",
      category_id: 6,
      image: "/uploads/c1e45e330b80f5fadadbf038985685b2.png",
      unit: "Порция",
      title: "Круассан с ветчиной",
      description:
        "Круассан с ветчиной - нежный, еще горячий круассан с сочной и пряной ветчиной. Удобный, быстрый и сытный перекус, который замечательно справится со своими задачами – улучшит настроение и насытит. На выбор один из пяти соусов, какой лучше подойдет – решать вам.",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 89,
      weight_type: "",
      category_id: 6,
      image: "/uploads/37be17cfd746ea468e3a477c7d03fcb0.png",
      unit: "Порция",
      title: "Круассан с салями",
      description:
        "Круассан с салями - простой способ побороть голод. Свежий круассан с аппетитной салями – удивительно простое сочетание вкусов. Ничего лишнего – только самое лучшее  для идеального перекуса. Возможно, немного горчичного соуса добавит необходимой пикантности.",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 90,
      weight_type: "",
      category_id: 6,
      image: "/uploads/40febb746b1652a70559af954389950c.png",
      unit: "Порция",
      title: "Круассан с индейкой",
      description:
        "Круассан с индейкой - сочетание, в которое влюбляешься с первого кусочка: воздушная выпечка с хрустящей корочкой, внутри самое нежное мясо индейки. Вкусный и питательный перекус, который сложно сделать еще лучше.",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 91,
      weight_type: "",
      category_id: 6,
      image: "/uploads/6755766e25729efbc7d56d707a33aa80.png",
      unit: "Порция",
      title: "Круассан с тунцом",
      description:
        "Круассан с тунцом - не просто быстрый перекус. Питательное и очень вкусное угощение. Диетическое мясо тунца невероятно полезно для нашего организма, а в сочетании со свежим и ароматным круассаном – настоящее спасение от голода.",
      favorite: false,
      cost_small: 40,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 92,
      weight_type: "",
      category_id: 6,
      image: "/uploads/a477f6cbe47e59a8264a6c0104fc2c88.png",
      unit: "Порция",
      title: "Круассан с лососем",
      description:
        "Круассан с лососем - ароматная свежая выпечка и нежный лосось. Идеальное сочетание вкусов, аппетитный, сытный и самый нежный перекус – просто предел совершенства.",
      favorite: false,
      cost_small: 50,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 93,
      weight_type: "",
      category_id: 6,
      image: "/uploads/b82ac0acbd7901f6ce8cb790ec5a805d.png",
      unit: "Порция",
      title: "Круассан с шоколадом",
      description:
        "Круассан с шоколадом - мечта сладкоежек. Сочетание простых вкусов, которые подарят неземное наслаждение. Идеален к чашечке кофе и незаменим в обеденный перерыв.",
      favorite: false,
      cost_small: 25,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 94,
      weight_type: "",
      category_id: 6,
      image: "/uploads/ddbb2b15f1aa96c8a2ec1ea0b4d024da.png",
      unit: "Порция",
      title: "Круассан с джемом",
      description:
        "Круассан с джемом - лучшая идея для завтрака. Замечательное дополнение к чашке черного или фруктового чая. Прекрасно поднимает настроение и быстро утоляет голод.",
      favorite: false,
      cost_small: 25,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 95,
      weight_type: "",
      category_id: 6,
      image: "/uploads/ac39ce9151ad9123f069d7a3235d34a8.png",
      unit: "Порция",
      title: "Круассан с заварным кремом",
      description:
        "Круассан с заварным кремом - свежая, ароматная выпечка со сладкой и нежной начинкой. Любая выпечка с заварным кремом великолепно подчеркивает и дополняет вкус кофе. Беспроигрышное сочетание и лучший выбор, как для завтрака, так и для обеда.",
      favorite: false,
      cost_small: 25,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 96,
      weight_type: "",
      category_id: 6,
      image: "/uploads/aaedeb49f25b67cfc0ade21c764f841b.png",
      unit: "Порция",
      title: "Круассан с миндалем",
      description:
        "Круассан с миндалем - классическая французская выпечка с изысканным и тонким вкусом миндаля. Это одно из самых простых, но невероятно оригинальных сочетаний. Лучшим образом дополнит любимый кофейный напиток, которому составит пару.",
      favorite: false,
      cost_small: 25,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 97,
      weight_type: "",
      category_id: 6,
      image: "/uploads/c0cf83c899010ad3d6e19f9de8a5e8f8.png",
      unit: "Порция",
      title: "Круассан со сгущенкой",
      description:
        "Круассан со сгущенкой -  любимое и знакомое с детства сочетание. Как кашу маслом, так и десерт сгущенным молоком, испортить не возможно. Лучшей пары к чашке кофе просто не найти.",
      favorite: false,
      cost_small: 25,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    }
  ],
  7: [
    {
      id: 63,
      weight_type: "",
      category_id: 7,
      image: "/uploads/4537a2a083f9316eeee0221a8352b3c7.png",
      unit: "Порция",
      title: "Даниш с ананасом",
      description:
        "Даниш с ананасом - нежная слоеная булочка с начинкой из сладкого крема и ананаса. Ароматный кофе и теплый даниш – традиционный датский завтрак. А датчане знают толк в уюте и комфорте.",
      favorite: false,
      cost_small: 15,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 64,
      weight_type: "",
      category_id: 7,
      image: "/uploads/1d22ae276ea7bfdd6fedd7bbe2227d3b.png",
      unit: "Порция",
      title: "Рулет с шоколадом",
      description:
        "Рулет с шоколадом - слоеный сладкий рулет с шоколадной начинкой. Нежная выпечка с ярким шоколадным вкусом. Хрустящая булочка лучшая пара утреннему капучино или обеденному латте.",
      favorite: false,
      cost_small: 15,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 65,
      weight_type: "",
      category_id: 7,
      image: "/uploads/bb667d2acb33c24898f802b311f1d76c.png",
      unit: "Порция",
      title: "Слойка яблоко-малина",
      description:
        "Слойка яблоко-малина - слоеная булочка с фруктовой начинкой. Выпечка с поистине домашним вкусом. Наслаждаться ею лучше под чашечку свежезаваренного чая.",
      favorite: false,
      cost_small: 15,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 66,
      weight_type: "",
      category_id: 7,
      image: "/uploads/0131dcfc2451f91b77c5fb22232b5e51.png",
      unit: "Порция",
      title: "Слойка с сыром",
      description:
        "Слойка с сыром - слоеная булочка с добавлением сыра. Хрустящая соленая слойка, только что из печи, идеально сочетается со сладким кофе. Сытная сырная начинка прекрасно утоляет голод.",
      favorite: false,
      cost_small: 15,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 67,
      weight_type: "",
      category_id: 7,
      image: "/uploads/ba8e49324d0f9a1d9d6ab2d1315c269e.png",
      unit: "Порция",
      title: "Слойка с курицей и грибами",
      description:
        "Слойка с курицей и грибами - слоеная булочка с мясной начинкой. Сытный и питательный перекус. Идеально с чашечкой американо.",
      favorite: false,
      cost_small: 15,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 68,
      weight_type: "",
      category_id: 7,
      image: "/uploads/69f0f50936377d390945a05717a5f82a.png",
      unit: "Порция",
      title: "Слойка со свининой",
      description:
        "Слойка со свининой - слоеная булочка с мясной начинкой. Вкусная и сочная альтернатива сухим бутербродам. Прекрасно дополняется чашечкой свежезаваренного сладкого чая или ароматного кофе.",
      favorite: false,
      cost_small: 15,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 75,
      weight_type: "",
      category_id: 7,
      image: "/uploads/050db6c71ef05e8c00eb87e0d245674c.png",
      unit: "Порция",
      title: "Круассан",
      description:
        "Круассан - классическая слоеная французская выпечка без начинки. Круассан и чашечка кофе – типичный парижский завтрак. Просто, недорого и невероятно вкусно.",
      favorite: false,
      cost_small: 15,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 76,
      weight_type: "",
      category_id: 7,
      image: "/uploads/4ead585995d34eb0924d04270b00e731.png",
      unit: "Порция",
      title: "Сэндвич с курицей",
      description:
        "Сэндвич с курицей - бутерброд с хрустящим ржаным хлебом и слайсами куриного копченого мяса. Удобный формат любимых сендвичей. Просто возьмите с собой и утолите голод в любое удобное для Вас время. Питательно, сытно и практично.",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 77,
      weight_type: "",
      category_id: 7,
      image: "/uploads/938bab292bb43e225ce889fc0fc7a9d8.png",
      unit: "Порция",
      title: "Сэндвич с ветчиной",
      description:
        "Сэндвич с ветчиной - хрустящий бутерброд с сочной ветчиной. Сытный перекус в удобной упаковке. Питательно, сытно, практично и доступно в любое удобное время.",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 78,
      weight_type: "",
      category_id: 7,
      image: "/uploads/503b513253882422177c354672ae3d9c.png",
      unit: "Порция",
      title: "Сэндвич с салями",
      description:
        "Сэндвич с салями - бутерброд с колбасой салями. Простое решение для перекуса. Не нужно ничего готовить – приходи, забирай и наслаждайся.",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 79,
      weight_type: "",
      category_id: 7,
      image: "/uploads/4acb633f1310663f85c8dde1d0eedeb5.png",
      unit: "Порция",
      title: "Сэндвич с лососем",
      description:
        "Сэндвич с лососем - бутерброды со слайсами лосося. Нежное мясо рыбы в сочетании с мягким хлебом – идеальный выбор для обеденного перерыва. Рекомендуем дополнить это ароматным кофе.",
      favorite: false,
      cost_small: 50,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 80,
      weight_type: "",
      category_id: 7,
      image: "/uploads/082b25c247408e8361726125dd033041.png",
      unit: "Порция",
      title: "Чиабатта с курицей",
      description:
        "Чиабатта с курицей - итальянская белая булочка с начинкой в виде слайсов копченой курицы. Воздушная чиабата с хрустящей корочкой – сама по себе идеальна. Но сложно испортить совершенство невероятно нежным копченым куриным мясом. Лучшая идея для обеденного перерыва.",
      favorite: false,
      cost_small: 39,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 81,
      weight_type: "",
      category_id: 7,
      image: "/uploads/2377237866005fa1277a2e2fc22416e3.png",
      unit: "Порция",
      title: "Чиабатта с ветчиной",
      description:
        "Чиабатта с ветчиной - итальянская белая булочка со слайсами ветчины. Сочная и ароматная ветчина в сочетании с потрясающей воздушной чиабаттой – еда, которая улучшит любой день. Сытный и вкусный перекус, который удобно брать с собой.",
      favorite: false,
      cost_small: 39,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    },
    {
      id: 82,
      weight_type: "",
      category_id: 7,
      image: "/uploads/35eb7d2dde1ea45208e2ed53ce3e417f.png",
      unit: "Порция",
      title: "Чиабатта с салями",
      description:
        "Чиабатта с салями - итальянская белая булочка с кружочками салями. Лучшая альтернатива бутербродам – хрустящая и нежная чиабатта с аппетитной салями. Идеально на завтрак, в обеденный перерыв и в любое время, когда захочется чего-то действительно вкусного.",
      favorite: false,
      cost_small: 39,
      cost_medium: 0,
      cost_large: 0,
      filters: [3]
    }
  ],
  8: [
    {
      id: 83,
      weight_type: "",
      category_id: 8,
      image: "/uploads/99ea21f26a0229f2f20216e3ab1f3032.png",
      unit: "Порция",
      title: "Цезарь",
      description:
        "Цезарь - один из самых знаменитых салатов в мире. Вкусная, питательная и, главное, полезная еда, которую можно забрать с собой. Легкий салат с богатым сочетанием вкусов.",
      favorite: false,
      cost_small: 50,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 84,
      weight_type: "",
      category_id: 8,
      image: "/uploads/29a179e81acce01a91fa38678ff30aa4.png",
      unit: "Порция",
      title: "Греческий",
      description:
        "Греческий - легкий салат с классическим составом. Яркий и неповторимый вкус знакомый каждому. Вкусная и полезная еда, которая всегда под рукой.",
      favorite: false,
      cost_small: 45,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    },
    {
      id: 85,
      weight_type: "",
      category_id: 8,
      image: "/uploads/ae69f28d4be3a8b43119e5d0545e0204.png",
      unit: "Порция",
      title: "Столичный",
      description:
        "Столичный -  сытный и питательный салат. Быстро и надолго утоляет голод. Мясной салат с богатым вкусом. Старая добрая классика, знакомая каждому.",
      favorite: false,
      cost_small: 35,
      cost_medium: 0,
      cost_large: 0,
      filters: [2]
    }
  ],
  14: [
    {
      id: 133,
      weight_type: "",
      category_id: 14,
      image: "/uploads/b1c9d6ed53dc3b61131fee2b81cad256.png",
      unit: "1кг.",
      title: 'Кофе "AROMA KAVA" - 1 кг.',
      description:
        'Кофе "AROMA KAVA" - 1 кг. – фирменный кофейный бленд в удобной герметичной упаковке. Выбирайте из предложенных вкусов SOFT/STRONG и наслаждайтесь любимым кофе дома или в офисе. ',
      favorite: false,
      cost_small: 500,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 134,
      weight_type: "",
      category_id: 14,
      image: "/uploads/ceb9d9fe3df0d284f019e67d2a65e94d.png",
      unit: "50гр.",
      title: 'Кофе "AROMA KAVA" - 50гр.',
      description:
        'Кофе "AROMA KAVA" - 50гр. – фирменный кофе, который всегда будет у вас под рукой.  Наслаждайтесь свежезаваренным напитком в любое время просто у себя дома, в офисе, в гостях.   ',
      favorite: false,
      cost_small: 25,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    }
  ],
  15: [
    {
      id: 135,
      weight_type: "",
      category_id: 15,
      image: "/uploads/4adde7f4a0a4dee378b02bcd317fcc79.png",
      unit: "1шт.",
      title: "Керамочашка AROMA - 400 мл.",
      description:
        "Керамочашка AROMA 400 мл – удобный аксессуар, который позволит наслаждаться любимыми напитками даже в пути. Не является герметичным. ",
      favorite: false,
      cost_small: 130,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    },
    {
      id: 136,
      weight_type: "",
      category_id: 15,
      image: "/uploads/68e27e1e5ac32c514d3827d485363e59.png",
      unit: "1шт.",
      title: "Термокружка AROMA - 400 мл.",
      description:
        "Термокружка AROMA - 400 мл. – удобный минитермос, который способен некоторое  время сохранять температуру напитка. Наслаждайтесь любимым кофе в любое время и в любом месте.  ",
      favorite: false,
      cost_small: 220,
      cost_medium: 0,
      cost_large: 0,
      filters: []
    }
  ]
};

export default menuSectionData;
