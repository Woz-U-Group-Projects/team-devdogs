using System;
using System.Collections.Generic;

namespace MoviePop.Models
{
    public partial class movies
    {
        public long movieID { get; set; }
        public string title { get; set; }
        public string director { get; set; }
        public string releaseDate { get; set; }
        public string genre { get; set; }
        public string starring { get; set; }
        public string mpaaRating { get; set; }
    }
}
