using System;
using System.Collections.Generic;

namespace MoviePop.Models
{
    public partial class userProfile
    {
        public long userID { get; set; }
        public string userName { get; set; }
        public string userPassword { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string gender { get; set; }
        public long? age { get; set; }
    }
}
