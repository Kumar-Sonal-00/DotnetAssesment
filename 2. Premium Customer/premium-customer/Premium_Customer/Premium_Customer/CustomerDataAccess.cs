using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Premium_Customer
{
    internal class CustomerDataAccess
    {
        private List<Customer> customers;

        public CustomerDataAccess()
        {
            customers = new List<Customer>
        {
            new Customer("9986017461", "Ravikiran", 13, 25000),
            new Customer("9986017462", "Raghu", 2, 250000),
            new Customer("9986017463", "Sneha", 5, 35000),
            new Customer("9986017464", "Priya", 15, 225000),
            new Customer("9986017465", "Suresh", 10, 75000)
        };
        }

        // Get premium customers
        public List<Customer> GetPremiumCustomers()
        {
            List<Customer> premiumCustomers = new List<Customer>();

            foreach (var customer in customers)
            {
                if (customer.TotalPurchase >= 200000 || customer.NumberOfVisits > 10)
                {
                    premiumCustomers.Add(customer);
                }
            }

            return premiumCustomers;
        }

        // Display customers
        public void DisplayCustomers(List<Customer> lstCust)
        {
            if (lstCust == null || lstCust.Count == 0)
            {
                Console.WriteLine("No premium customers present.");
            }
            else
            {
                foreach (var customer in lstCust)
                {
                    Console.WriteLine($"Mobile Number: {customer.MobileNumber}, Name: {customer.Name}, Visits: {customer.NumberOfVisits}, Total Purchase: {customer.TotalPurchase}");
                }
            }
        }
    }
}
