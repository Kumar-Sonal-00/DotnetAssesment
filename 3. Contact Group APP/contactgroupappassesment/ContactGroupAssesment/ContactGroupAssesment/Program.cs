namespace ContactGroupAssesment
{
    internal class Program
    {
        static void Main(string[] args)
        {

            List<Contact> contactList = new List<Contact>();
            ContactService contactService = new ContactService();

            Console.WriteLine("Enter the number of contact details:");
            int numberOfContacts = int.Parse(Console.ReadLine());

            for (int i = 0; i < numberOfContacts; i++)
            {
                Console.WriteLine("Enter contact details (name, company, title, mobile, alternateMobile, email, dateCreated):");
                string[] contactDetails = Console.ReadLine().Split(',');

                Contact contact = new Contact(
                    contactDetails[0].Trim(),
                    contactDetails[1].Trim(),
                    contactDetails[2].Trim(),
                    contactDetails[3].Trim(),
                    contactDetails[4].Trim(),
                    contactDetails[5].Trim(),
                    DateTime.Parse(contactDetails[6].Trim())
                );

                contactList.Add(contact);
            }

            int choice;
            do
            {
                Console.WriteLine("Enter a search type:");
                Console.WriteLine("1. Name");
                Console.WriteLine("2. Date created");
                Console.WriteLine("3. Email domain");
                Console.WriteLine("4. Exit");
                choice = int.Parse(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        Console.WriteLine("Enter a name:");
                        string name = Console.ReadLine();
                        List<Contact> contactsByName = contactService.FindContactByName(contactList, name);
                        DisplayContacts(contactsByName);
                        break;

                    case 2:
                        Console.WriteLine("Enter the date to search contacts (yyyy-mm-dd):");
                        DateTime dateCreated = DateTime.Parse(Console.ReadLine());
                        List<Contact> contactsByDate = contactService.FindContactByDateCreated(contactList, dateCreated);
                        DisplayContacts(contactsByDate);
                        break;

                    case 3:
                        Console.WriteLine("Enter the Email domain to search contacts:");
                        string emailDomain = Console.ReadLine();
                        List<Contact> contactsByDomain = contactService.FindContactsByEmailDomain(contactList, emailDomain);
                        DisplayContacts(contactsByDomain);
                        break;

                    case 4:
                        Console.WriteLine("Exiting...");
                        break;

                    default:
                        Console.WriteLine("Invalid choice");
                        break;
                }

            } while (choice != 4);
        }

        // Method to display contacts
        private static void DisplayContacts(List<Contact> contacts)
        {
            if (contacts.Count == 0)
            {
                Console.WriteLine("No contacts found.");
            }
            else
            {
                Console.WriteLine("{0,-10} {1,-10} {2,-18} {3,-18} {4,-20} {5,-22} {6,-15}", "Name", "Company", "Title", "Mobile", "Alternate Mobile", "Email", "Date Created");

                foreach (Contact contact in contacts)
                {
                    Console.WriteLine("{0,-10} {1,-10} {2,-18} {3,-18} {4,-20} {5,-22} {6,-15}", contact.Name, contact.Company, contact.Title, contact.Mobile, contact.AlternateMobile, contact.Email, contact.DateCreated.ToShortDateString());

                }
            }
        }

    }
}
