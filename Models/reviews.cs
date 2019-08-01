using System;
using System.Collections.Generic;

namespace MoviePop.Models
{
    public partial class reviews
    {
        public long reviewsID { get; set; }
        public string movieReview { get; set; }
        public long? movieID { get; set; }
        public long? ratingID { get; set; }
        public long? commentsID { get; set; }
        public long? userID { get; set; }
    }
}
