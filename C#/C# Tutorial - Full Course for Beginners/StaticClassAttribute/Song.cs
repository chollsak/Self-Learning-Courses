using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StaticClassAttribute
{
    public class Song
    {
        public string title;
        public string artist;
        public int duration;
        public static int songCount = 0; // attribute about the class itself, not the object

        public Song(string aTitle, string aArtist, int aDuration)
        {
            title = aTitle;
            artist = aArtist;
            duration = aDuration;
            songCount++; 
        }

        public int getSongCount()
        {
            return songCount;
        }
        
    }
}