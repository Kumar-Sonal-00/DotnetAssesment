using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Premium_Customer
{
    internal class Customer
    {
        public string MobileNumber { get; set; }
        public string Name { get; set; }
        public int NumberOfVisits { get; set; }
        public decimal TotalPurchase { get; set; }

        public Customer(string mobileNumber, string name, int numberOfVisits, decimal totalPurchase)
        {
            MobileNumber = mobileNumber;
            Name = name;
            NumberOfVisits = numberOfVisits;
            TotalPurchase = totalPurchase;
        }
    }
}
