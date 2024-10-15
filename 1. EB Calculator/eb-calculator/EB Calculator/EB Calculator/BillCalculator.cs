using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EB_Calculator
{
    // Responsibility of this class to calculate electricity bill
    internal class BillCalculator
    {
        // Method to calculate units consumed
        public static int CalculateUnitsConsumed(int previousReading, int currentReading)
        {
            return currentReading - previousReading;
        }

        // Method to calculate bill amount based on units consumed
        public static int CalculateBillAmount(int unitsConsumed)
        {
            double billAmount = 0;

            if (unitsConsumed <= 100)
            {
                billAmount = 100;
            }
            else if (unitsConsumed <= 200)
            {
                billAmount = 100 + (unitsConsumed - 100) * 3.50;
            }
            else if (unitsConsumed <= 500)
            {
                billAmount = 100 + 100 * 3.50 + (unitsConsumed - 200) * 4.50;
            }
            else
            {
                billAmount = 100 + 100 * 3.50 + 300 * 4.50 + (unitsConsumed - 500) * 5.50;
            }

            return (int)Math.Round(billAmount);
            }
        }
}
