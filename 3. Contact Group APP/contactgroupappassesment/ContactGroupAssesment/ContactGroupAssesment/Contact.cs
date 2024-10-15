using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactGroupAssesment
{
    internal class Contact
    {
        public string Name { get; set; }
        public string Company { get; set; }
        public string Title { get; set; }
        public string Mobile { get; set; }
        public string AlternateMobile { get; set; }
        public string Email { get; set; }
        public DateTime DateCreated { get; set; }

        // Default constructor
        public Contact() { }

        // Parameterized constructor
        public Contact(string name, string company, string title, string mobile, string alternateMobile, string email, DateTime dateCreated)
        {
            Name = name;
            Company = company;
            Title = title;
            Mobile = mobile;
            AlternateMobile = alternateMobile;
            Email = email;
            DateCreated = dateCreated;
        }

   
        public override string ToString()
        {
            return string.Format("{0,-10} {1,-12} {2,-20} {3,-12} {4,-16} {5,-20} {6,-12}",
                Name, Company, Title, Mobile, AlternateMobile, Email, DateCreated.ToString("yyyy-MM-dd"));
        }
    }
}
