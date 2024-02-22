//var broccoli = new Product
// {
//     Name = "broccoli",
//     Price = 0.6m,
//     Supplier = "Sheepy Farms",
// };
// var bananaSmoothie = new Product
// {
//     Name = "banana smoothie",
//     Price = 3m,
//     Supplier = "Innocent Smoothies"
// };

// var products = new List<Product>
// {
//     broccoli,
//     bananaSmoothie,
// };

// var inventory = new Inventory();
// inventory.Stock.Add(broccoli, 5);
// inventory.Stock.Add(bananaSmoothie, 10);

// void LookUpProduct()
// {
//     Console.WriteLine("Enter the name of the product you would like to find out more about:");
//     var productName = Console.ReadLine() ?? "";
//     var matchingProduct = products.First(product => product.Name == productName);
//     Console.WriteLine($"Name: {matchingProduct.Name}");
//     Console.WriteLine($"Price: {matchingProduct.Price}");
//     Console.WriteLine($"Supplier: {matchingProduct.Supplier}");
//     Console.WriteLine($"Stock: {inventory.Stock[matchingProduct]}");
// }

// void AddItemToBasket(Basket basket)
// {
//     Console.WriteLine("Enter the name of the product you would like to add to the basket:");
//     var productName = Console.ReadLine() ?? "";
//     var matchingProduct = products.First(product => product.Name == productName);
//     var stock = inventory.Stock[matchingProduct];
//     if (stock == 0)
//     {
//         Console.WriteLine("Sorry, that product is currently out of stock.");
//     }
//     else
//     {
//         basket.Products.Add(matchingProduct);
//         inventory.Stock[matchingProduct]--;
//         Console.WriteLine($"Success: {matchingProduct.Name} has been added to the basket.");
//     }
// }

// // {
// //     Name = "broccoli",
// //     Price = 0.6m,
// //     Supplier = "Sheepy Farms",
// // };
// void Checkout(Basket basket){
// if(basket.Products.Count !=0){
//     decimal price = 0;
//     foreach(var items in basket.Products){
//         price += items.Price;  
//         if(inventory.SoldItem.TryGetValue(items, out int existingQuantity))
//         {
//             inventory.SoldItem[items] = existingQuantity +1;
//         }   
//         else
//         {
//             inventory.SoldItem.Add(items,1);
//         } 
//     }
//     // Console.WriteLine($"You have completed checkout, Please pay the amount{price} while its delivered");

// }else{
//     Console.WriteLine("You dont have any items to checkout");
// }
// }
// Console.WriteLine("Are you a customer or an employee?");
// if (Enum.TryParse<Role>(Console.ReadLine(), ignoreCase: true, out var role))
// {
//     if (role == Role.Employee)
//     {
//         Console.WriteLine("Welcome, employee.");
//         Console.WriteLine("*****");
//         Console.WriteLine("[1] Look up a product");
//         Console.WriteLine("[2] Register new stock");
//         Console.WriteLine("Enter the number of the action you would like to take:");
//         if (int.TryParse(Console.ReadLine(), out var actionNumber))
//         {
//             if (actionNumber == 1)
//             {
//                 LookUpProduct();
//             }
//             else if (actionNumber == 2)
//             {
//                 Console.WriteLine("Sorry, we don't have a way of adding new stock yet.");
//             }
//             else
//             {
//                 Console.WriteLine("Sorry, that wasn't one of the options.");
//             }
//         }
//         else
//         {
//             Console.WriteLine("Sorry, I didn't understand your response.");
//         }
//     }
//     else if (role == Role.Customer)
//     {
//         var basket = new Basket();
//         Console.WriteLine("Welcome, customer. You have been given an empty basket.");
//         while (true)
//         {
//             Console.WriteLine("*****");
//             Console.WriteLine("[1] Add an item to the basket");
//             Console.WriteLine("[2] Check out");
//             Console.WriteLine("Enter the number of the action you would like to take next:");
//             if (int.TryParse(Console.ReadLine(), out var actionNumber))
//             {
//                 if (actionNumber == 1)
//                 {
//                     AddItemToBasket(basket);
//                     continue;
//                 }
//                 else if (actionNumber == 2)
//                 {
//                     Checkout(basket);
//                     Console.WriteLine("Sorry, we don't have a way of checking out yet.");
//                 }
//                 else
//                 {
//                     Console.WriteLine("Sorry, that wasn't one of the options.");
//                 }
//             }
//             else
//             {
//                 Console.WriteLine("Sorry, I didn't understand your response.");
//             }
//             break;
//         }
//     }
// }
// else
// {
//     Console.WriteLine("Sorry, I didn't understand your response.");
// }

// class Inventory
// {
//     public Dictionary<Product, int> Stock { get; } = new Dictionary<Product, int>();
//     public Dictionary<Product,int> SoldItem{get;}  =new Dictionary<Product,int>();
// }

// class Product
// {
//     public required string Name { get; init; }
//     public required decimal Price { get; init; }
//     public required string Supplier { get; init; }
// }

// class Basket
// {
//     public List<Product> Products { get; } = new List<Product>();
// }

// enum Role
// {
//     Customer,
//     Employee,
// }
