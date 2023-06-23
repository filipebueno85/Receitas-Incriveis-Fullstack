CREATE DATABASE  IF NOT EXISTS `RECEITAS_INCRIVEIS`;
USE `RECEITAS_INCRIVEIS`;


DROP TABLE IF EXISTS `meals`;

CREATE TABLE `meals` (
  `idMeal` int NOT NULL AUTO_INCREMENT,
  `strMeal` varchar(255) NOT NULL,
  `strDrinkAlternate` varchar(255) DEFAULT NULL,
  `strCategory` varchar(255) NOT NULL,
  `strArea` varchar(255) NOT NULL,
  `strInstructions` text NOT NULL,
  `strMealThumb` varchar(255) NOT NULL,
  `strTags` varchar(255) NOT NULL,
  `strYoutube` varchar(255) DEFAULT NULL,
  `strIngredient1` varchar(255) DEFAULT NULL,
  `strIngredient2` varchar(255) DEFAULT NULL,
  `strIngredient3` varchar(255) DEFAULT NULL,
  `strIngredient4` varchar(255) DEFAULT NULL,
  `strIngredient5` varchar(255) DEFAULT NULL,
  `strIngredient6` varchar(255) DEFAULT NULL,
  `strIngredient7` varchar(255) DEFAULT NULL,
  `strIngredient8` varchar(255) DEFAULT NULL,
  `strIngredient9` varchar(255) DEFAULT NULL,
  `strIngredient10` varchar(255) DEFAULT NULL,
  `strIngredient11` varchar(255) DEFAULT NULL,
  `strIngredient12` varchar(255) DEFAULT NULL,
  `strIngredient13` varchar(255) DEFAULT NULL,
  `strIngredient14` varchar(255) DEFAULT NULL,
  `strIngredient15` varchar(255) DEFAULT NULL,
  `strIngredient16` varchar(255) DEFAULT NULL,
  `strIngredient17` varchar(255) DEFAULT NULL,
  `strIngredient18` varchar(255) DEFAULT NULL,
  `strIngredient19` varchar(255) DEFAULT NULL,
  `strIngredient20` varchar(255) DEFAULT NULL,
  `strMeasure1` varchar(255) DEFAULT NULL,
  `strMeasure2` varchar(255) DEFAULT NULL,
  `strMeasure3` varchar(255) DEFAULT NULL,
  `strMeasure4` varchar(255) DEFAULT NULL,
  `strMeasure5` varchar(255) DEFAULT NULL,
  `strMeasure6` varchar(255) DEFAULT NULL,
  `strMeasure7` varchar(255) DEFAULT NULL,
  `strMeasure8` varchar(255) DEFAULT NULL,
  `strMeasure9` varchar(255) DEFAULT NULL,
  `strMeasure10` varchar(255) DEFAULT NULL,
  `strMeasure11` varchar(255) DEFAULT NULL,
  `strMeasure12` varchar(255) DEFAULT NULL,
  `strMeasure13` varchar(255) DEFAULT NULL,
  `strMeasure14` varchar(255) DEFAULT NULL,
  `strMeasure15` varchar(255) DEFAULT NULL,
  `strMeasure16` varchar(255) DEFAULT NULL,
  `strMeasure17` varchar(255) DEFAULT NULL,
  `strMeasure18` varchar(255) DEFAULT NULL,
  `strMeasure19` varchar(255) DEFAULT NULL,
  `strMeasure20` varchar(255) DEFAULT NULL,
  `strSource` varchar(255) DEFAULT NULL,
  `strImageSource` varchar(255) DEFAULT NULL,
  `strCreativeCommonsConfirmed` varchar(255) DEFAULT NULL,
  `dateModified` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idMeal`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Insert values for table `meals`
--

INSERT INTO meals VALUES
('1',
 'Chicken Enchilada Casserole',
 null,
 'Chicken',
 'Mexican',
 "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot. Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes. No water is needed, the chicken will cook in the Enchilada sauce. Make sure you stir occasionally so that it doesn't stick to the bottom.\r\nRemove chicken from the pot and shred with two forks.\r\nPreheat oven to 375 F degrees.\r\nStart layering the casserole. Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish. I used a longer baking dish, so that I can put 2 corn tortillas across. Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce. Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese. Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.\r\nBake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.\r\nServe warm.",
 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg',
 'Casserole,Cheasy,Meat',
 'https://www.youtube.com/watch?v=EtVkwVKLc_M',
 'Enchilada sauce',
 'shredded Monterey Jack cheese',
 'corn tortillas',
 'chicken breasts',
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 '14 oz jar',
 '3 Cups',
 '6',
 '2',
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 null,
 'No',
 '2017-09-08 16:41:03');

DROP TABLE IF EXISTS `drinks`;

CREATE TABLE `drinks` (
  `idDrink` int NOT NULL AUTO_INCREMENT,
  `strDrink` varchar(255) NOT NULL,
  `strDrinkAlternate` varchar(255) DEFAULT NULL,
  `strTags` varchar(255) DEFAULT NULL,
  `strVideo` varchar(255) DEFAULT NULL,
  `strCategory` varchar(255) DEFAULT NULL,
  `strIBA` varchar(255) DEFAULT NULL,
  `strAlcoholic` varchar(255) DEFAULT NULL,
  `strGlass` varchar(255) DEFAULT NULL,
  `strInstructions` text DEFAULT NULL,
  `strInstructionsES` text DEFAULT NULL,
  `strInstructionsDE` text DEFAULT NULL,
  `strInstructionsFR` text DEFAULT NULL,
  `strInstructionsIT` text DEFAULT NULL,
  `strInstructionsZH-HANS` text DEFAULT NULL,
  `strInstructionsZH-HANT` text DEFAULT NULL,
  `strDrinkThumb` varchar(255) DEFAULT NULL,
  `strIngredient1` varchar(255) DEFAULT NULL,
  `strIngredient2` varchar(255) DEFAULT NULL,
  `strIngredient3` varchar(255) DEFAULT NULL,
  `strIngredient4` varchar(255) DEFAULT NULL,
  `strIngredient5` varchar(255) DEFAULT NULL,
  `strIngredient6` varchar(255) DEFAULT NULL,
  `strIngredient7` varchar(255) DEFAULT NULL,
  `strIngredient8` varchar(255) DEFAULT NULL,
  `strIngredient9` varchar(255) DEFAULT NULL,
  `strIngredient10` varchar(255) DEFAULT NULL,
  `strIngredient11` varchar(255) DEFAULT NULL,
  `strIngredient12` varchar(255) DEFAULT NULL,
  `strIngredient13` varchar(255) DEFAULT NULL,
  `strIngredient14` varchar(255) DEFAULT NULL,
  `strIngredient15` varchar(255) DEFAULT NULL,
  `strMeasure1` varchar(255) DEFAULT NULL,
  `strMeasure2` varchar(255) DEFAULT NULL,
  `strMeasure3` varchar(255) DEFAULT NULL,
  `strMeasure4` varchar(255) DEFAULT NULL,
  `strMeasure5` varchar(255) DEFAULT NULL,
  `strMeasure6` varchar(255) DEFAULT NULL,
  `strMeasure7` varchar(255) DEFAULT NULL,
  `strMeasure8` varchar(255) DEFAULT NULL,
  `strMeasure9` varchar(255) DEFAULT NULL,
  `strMeasure10` varchar(255) DEFAULT NULL,
  `strMeasure11` varchar(255) DEFAULT NULL,
  `strMeasure12` varchar(255) DEFAULT NULL,
  `strMeasure13` varchar(255) DEFAULT NULL,
  `strMeasure14` varchar(255) DEFAULT NULL,
  `strMeasure15` varchar(255) DEFAULT NULL,
  `strImageSource` varchar(255) DEFAULT NULL,
  `strImageAttribution` varchar(255) DEFAULT NULL,
  `strCreativeCommonsConfirmed` varchar(255) DEFAULT NULL,
  `dateModified` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idDrink`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `drinks` VALUES
 ('1',
'Lady Love Fizz',
null,
null,
null,
'Ordinary Drink',
null,
'Alcoholic',
'Cocktail glass',
'Shake all ingredients (except carbonated water) with ice and strain into a cocktail glass over two ice cubes. Fill with carbonated water, stir, and serve.',
null,
null,
null,
"Shakerare tutti gli ingredienti (tranne l'acqua gassata) con ghiaccio e filtrare in un bicchiere da cocktail su due cubetti di ghiaccio. Riempite con acqua gassata, mescolate e servite.",
null,
null,
'https://www.thecocktaildb.com/images/media/drink/20d63k1504885263.jpg',
'Gin',
'Light cream',
'Powdered sugar',
'Lemon',
'Egg white',
'Carbonated water',
null,
null,
null,
null,
null,
null,
null,
null,
null,
'2 oz ',
'2 tsp ',
'1 tsp ',
'Juice of 1/2',
'1 ',
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
'No',
'2017-09-08 16:41:03');

DROP TABLE IF EXISTS `categories_meals`;

CREATE TABLE `categories_meals` (
  `idCategory` int NOT NULL AUTO_INCREMENT,
  `strCategory` varchar(255) NOT NULL,
  `strCategoryThumb` varchar(255) DEFAULT NULL,
  `strCategoryDescription` text DEFAULT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;


INSERT INTO `categories_meals` VALUES 
('1', 'Beef', 'https://www.themealdb.com/images/category/beef.png', "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"),
('2', 'Chicken', 'https://www.themealdb.com/images/category/chicken.png', "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."),
('3', 'Dessert', 'https://www.themealdb.com/images/category/dessert.png', "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts."),
('4', 'Lamb', 'https://www.themealdb.com/images/category/lamb.png', "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n"),
('5', 'Miscellaneous', 'https://www.themealdb.com/images/category/miscellaneous.png', 'General foods that dont fit into another category'),    
('6','Pasta','https://www.themealdb.com/images/category/pasta.png','Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. Also commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).'),
('7','Pork','https://www.themealdb.com/images/category/pork.png','Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork. Pork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.'),
('8','Seafood','https://www.themealdb.com/images/category/seafood.png','Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term "seafood" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.'),
('9','Side','https://www.themealdb.com/images/category/side.png','A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).'),
('10','Starter','https://www.themealdb.com/images/category/starter.png','An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal. Historically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries. It formed a part of the “first service” of the meal, which consisted of potage, hors d’œuvre, and entrée (including the bouilli and relevé). The “second service” consisted of roast (rôti), salad, and entremets (the entremets sometimes being separated into a “third service” of their own). The final service consisted only of dessert.[3]:3–11 :13–25'),
('11','Vegan','https://www.themealdb.com/images/category/vegan.png','Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable.'),
('12','Vegetarian','https://www.themealdb.com/images/category/vegetarian.png','Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter. Vegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.'),
('13','Breakfast','https://www.themealdb.com/images/category/breakfast.png','Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.'),
('14','Goat','https://www.themealdb.com/images/category/goat.png','The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.');

DROP TABLE IF EXISTS `categories_drinks`;

CREATE TABLE `categories_drinks` (
  `strCategory` varchar(255) NOT NULL,
  PRIMARY KEY (`strCategory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `categories_drinks` VALUES 
('Ordinary Drink'),
('Cocktail'),
('Shake'),
('Other / Unknown'),
('Cocoa'),
('Shot'),
('Coffee / Tea'),
('Homemade Liqueur'),
('Punch / Party Drink'),
('Beer'),
('Soft Drink');


--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;


INSERT INTO `users` VALUES 
  (1,'Admin','admin','admin@admin.com','$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'),
  (2,'User','user','user@user.com','$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'),
  (3,'User','user','@user.com','$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'),
  (4,'User','user','invalid.user@user.com','$2a$10$HDkFwOMKOI6PTza0F7.YRu1Bqsqb9hx7XkuV7QeYB5dRL4z9DI1Mu');
