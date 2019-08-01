using System;
using System.Collections.Generic;

namespace MoviePop.Models
{
    public partial class comments
    {
        public long commentsID { get; set; }
        public string comments1 { get; set; }
        public long reviewsID { get; set; }
        public long userID { get; set; }
    }
}
