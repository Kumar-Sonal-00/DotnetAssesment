namespace Premium_Customer
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                CustomerDataAccess customerDataAccess = new CustomerDataAccess();
                List<Customer> premiumCustomers = customerDataAccess.GetPremiumCustomers();
                customerDataAccess.DisplayCustomers(premiumCustomers);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
        }
    }
}
