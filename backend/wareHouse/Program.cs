using System.Diagnostics.Metrics;
using System.Net.Http.Headers;
using System.Runtime.CompilerServices;

var amazonFresh = new Shop(
    new Dictionary<string, int>
    {
        { "Apple", 5 },
        { "Banana", 8 },
        { "Cherry", 10 },
    }
);

Console.WriteLine("The stock at AmazonFresh:");
foreach (var item in amazonFresh.DictStock)
{
    Console.WriteLine($"{item.Key}:{item.Value}");
}
var customer1 = new Customer();
Console.WriteLine("Please check the stock above and mention the quantity you need:");

customer1.addItemsToCart(amazonFresh);

public class Shop
{
    public Dictionary<string, int> DictStock { get; set; }

    //Customer
    public List<Customer> Customers { get; } = new List<Customer>();

    public Dictionary<string, int> ItemsSold { get; set; }

    // Manager

    public Shop(Dictionary<string, int> stock)
    {
        DictStock = stock;
        ItemsSold = new Dictionary<string, int>();
    }
}

public class Customer
{
    public Dictionary<string, int> Cart { get; set; }

    public void addItemsToCart(Shop shop)
    {
        while (true)
        {
            Console.WriteLine("PLease enter the product name needed");
            string ProductName = Console.ReadLine() ?? "";
            Console.WriteLine("PLease enter the Quantity  needed");
            int.TryParse(Console.ReadLine() ?? "", out int quantity);
            if (shop.DictStock.TryGetValue(ProductName, out int value))
            {
                if (value >= quantity)
                {
                    Cart.Add(ProductName, quantity);
                    shop.DictStock[ProductName] = --value;
                }
                else
                {
                    Console.WriteLine(
                        $"Sorry, we don't have enough stock of {ProductName}, only {value} left."
                    );
                }
            }
            else
            {
                Console.WriteLine($"Sorry, we don't have {ProductName}");
                Console.WriteLine($"Please check our stock list: ");
                foreach (var pair in shop.DictStock)
                {
                    Console.WriteLine($"{pair.Key}:{pair.Value}");
                }
            }

            Console.WriteLine("Do you Need Some more product y/n");
            string Continue = Console.ReadLine() ?? "";
            if (Continue == "n")
            {
                break;
            }
        }
    }

    // public Customer(Dictionary<string, int> cart)
    // {
    //     Cart = cart;
    // }
    //          cart.add( Console.ReadLine() ?? "";

    //product = {"name": "Apple", "price": 4.5}
}

public class Manager
{
    public Dictionary<string, int> Restock { get; set; }
}
// Dictionary<string, int> dictStock = [];
// Dictionary<string, int> dictBasket = [];
// var outOfStockList = new List<string>();
// Dictionary<string, int> dictReStock = [];

// var stockList = new List<string> { "Bread", "Milk", "Eggs", "Bread", "Bread", "Milk" };

// void GetStock(List<string> stockList)
// {
//     foreach (string stock in stockList)
//     {
//         //initialize or increment the count for this item
//         if (dictStock.ContainsKey(stock))
//         {
//             dictStock[stock]++;
//         }
//         else
//         {
//             dictStock.Add(stock, 1);
//         }
//     }
// }

// GetStock(stockList);

// foreach (KeyValuePair<string, int> item in dictStock)
// {
//     Console.WriteLine($"There are {item.Value} {item.Key} in stock.");
// }

// // addToCart()
// var cartList = new List<string> { "Bread", "Milk", "Eggs", "Bread", "Bread", "Milk", "Milk" };
// void addToCart(List<string> cartList)
// {
//     foreach (string stock in cartList)
//     {
//         //initialize or increment the count for this item
//         if (dictStock.TryGetValue(stock, out int value) && value > 0)
//         {
//             if (!dictBasket.TryGetValue(stock, out int value1))
//             {
//                 dictBasket.Add(stock, 1);
//                 dictStock[stock] = --value;
//             }
//             else
//             {
//                 dictBasket[stock] = ++value;
//                 dictStock[stock] = --value;
//             }
//             if (value == 0)
//                 outOfStockList.Add(stock);
//         }
//         else
//         {
//             outOfStockList.Add(stock);
//             //Console.WriteLine($"{stock}Not in the stock, try after sometime");
//         }
//     }
// }

// addToCart(cartList);
// foreach (KeyValuePair<string, int> item in dictBasket)
// {
//     Console.WriteLine($"There are {item.Value} {item.Key} in Basket.");
// }

// // foreach (string item in outOfStockList)
// // {
// //     Console.WriteLine($"{item} is out of stock");
// // }

// void ReStock(List<string> outOfStockList)
// {
//     foreach (string stock in outOfStockList)
//     {
//         //initialize or increment the count for this item
//         if (dictReStock.ContainsKey(stock))
//         {
//             dictReStock[stock]++;
//         }
//         else
//         {
//             dictReStock.Add(stock, 1);
//         }
//     }
// }

// ReStock(outOfStockList);
// foreach (KeyValuePair<string, int> item in dictReStock)
// {
//     Console.WriteLine($" {item.Value} {item.Key} to ReStock");
// }
