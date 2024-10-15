using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactGroupAssesment
{
    internal class ContactService
    {
        // Method to find contacts by name
        public List<Contact> FindContactByName(List<Contact> contactList, string name)
        {
            return contactList.Where(c => c.Name.Equals(name, StringComparison.OrdinalIgnoreCase)).ToList();
        }

        // Method to find contacts by date created
        public List<Contact> FindContactByDateCreated(List<Contact> contactList, DateTime dateCreated)
        {
            return contactList.Where(c => c.DateCreated.Date == dateCreated.Date).ToList();
        }

        public List<Contact> FindContactsByEmailDomain(List<Contact> contactList, string emailDomain)
        { // Trim and convert the partial domain to lowercase for case-insensitive matching
            emailDomain = emailDomain.Trim().ToLower();

            return contactList.Where(c =>
            {
                if (string.IsNullOrWhiteSpace(c.Email))
                    return false;

                // Extract domain from the email
                int atIndex = c.Email.IndexOf('@');
                if (atIndex == -1)
                    return false;

                string domain = c.Email.Substring(atIndex + 1).ToLower();
                return domain.Contains(emailDomain);
            }).ToList();
        }
    }
}
