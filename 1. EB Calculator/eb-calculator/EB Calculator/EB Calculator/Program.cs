namespace EB_Calculator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Prompt user for input
            Console.Write("Enter previous reading: ");
            int previousReading = int.Parse(Console.ReadLine());

            Console.Write("Enter current reading: ");
            int currentReading = int.Parse(Console.ReadLine());

            // Calculate units consumed and bill amount
            int unitsConsumed = BillCalculator.CalculateUnitsConsumed(previousReading, currentReading);
            int billAmount = BillCalculator.CalculateBillAmount(unitsConsumed);

            // Display results
            Console.WriteLine($"Unit consumed: {unitsConsumed}");
            Console.WriteLine($"EB Bill amount: {billAmount}");
        }
    }
}
