using System;
using System.Collections.Generic;

namespace MoviePop.Models
{
    public partial class rating
    {
        public long ratingID { get; set; }
        public long rating1 { get; set; }
        public long movieID { get; set; }
        public long userID { get; set; }
    }
}
