const chefSpecialties = new Map();
chefSpecialties.set("Олег", "Пицца");
chefSpecialties.set("Андрей", "Суши");
chefSpecialties.set("Анна", "Десерты");


const menu = new Map();
menu.set('Пицца "Маргарита"', "Олег");
menu.set('Пицца "Пепперони"', "Олег");
menu.set('Пицца "Три сыра"', "Олег");
menu.set('Суши "Филадельфия"', "Андрей");
menu.set('Суши "Калифорния"', "Андрей");
menu.set('Суши "Чизмаки"', "Андрей");
menu.set('Суши "Сеякемаки"', "Андрей");
menu.set("Десерт Тирамису", "Анна");
menu.set("Десерт Чизкейк", "Анна");



function newOrder(order, availableChefs) {
  for (const chef of availableChefs) {
    const specialty = chefSpecialties.get(chef);
    if (menu.has(order) && menu.get(order) === chef) {
      return chef;
    }
  }
  return "Нет повара для данного заказа";
}

const order = 'Десерт Тирамису';
const availableChefs = ["Олег", "Андрей", "Анна"];

const chefForOrder = newOrder(order, availableChefs);
console.log(chefForOrder);
