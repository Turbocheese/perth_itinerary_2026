// ===== TOUCH DEVICE DETECTION & OPTIMIZATION =====

(function detectAndOptimize() {
  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  if (isTouchDevice) {
    document.documentElement.classList.add("touch-device");
    console.log("📱 Touch device detected - Performance mode enabled");

    // Reduce animation duration for mobile
    document.documentElement.style.setProperty("--animation-speed", "0.2s");
  } else {
    document.documentElement.classList.add("non-touch-device");
    document.documentElement.style.setProperty("--animation-speed", "0.3s");
  }
})();

// ===== TRIP DATA =====

const tripData = [
  {
    day: 1,
    date: "26 JUN (FRI)",
    title: "Arrival & Drive to Margaret River",
    fact: "Margaret River produces 20% of Australia's premium wine, despite growing only 3% of the country's total grapes.",
    icon: "fa-wine-bottle",
    activities: [
      {
        time: "09:00",
        desc: "Book 2 taxis to Changi Airport",
        tag: "activity",
        duration: "30 mins",
        tip: "Pre-book via an app to avoid morning rush hour delays.",
      },
      {
        time: "09:30",
        desc: "Check-in at Terminal T1",
        tag: "activity",
        duration: "2.5 hours",
        tip: "Download the Scoot app for faster bag drop and digital boarding passes.",
      },
      {
        time: "12:00",
        desc: "Flight TR8 departs Singapore",
        tag: "activity",
        duration: "5h 10m",
        fact: "Google Maps allows you to download entire regions for offline use while you have Wi-Fi.",
      },
      {
        time: "17:10",
        desc: "Arrive Perth Airport T1",
        tag: "activity",
        duration: "15 mins",
        tip: "Winter evenings in Perth get dark by 5:30 PM. Have your jackets accessible!",
      },
      {
        time: "17:25",
        desc: "Clear customs, collect luggage, pick up Kia Carnival",
        tag: "activity",
        duration: "1h 20m",
        tip: "Inspect the rental vehicle thoroughly under good lighting before leaving the lot.",
      },
      {
        time: "18:45",
        desc: "Start drive to Margaret River",
        tag: "activity",
        duration: "26 mins",
        fact: "Kangaroos are drawn to headlights and are most active at dusk. The driver must stay highly alert!",
      },
      {
        time: "19:11",
        desc: "Dinner at Grill'd Burgers (takeaway)",
        address: "Cockburn Gateway, 816 Beeliar Dr, Success WA 6164",
        tag: "activity",
        duration: "49 mins",
        tip: "Try the 'Garden Goodness' burger for a great veggie option. Fast and reliable.",
      },
      {
        time: "20:00",
        desc: "Shop at Woolworths before 9pm close",
        address: "Cockburn Gateway, Success WA 6164",
        tag: "activity",
        duration: "45 mins",
        tip: "Grab essential breakfast items, coffee, and bottled water for your first morning.",
      },
      {
        time: "20:45",
        desc: "Drive to Margaret River (2h 40m)",
        address: "Apartment #4, 16 Town View Terrace, Margaret River WA 6285",
        tag: "activity",
        duration: "2h 40m",
      },
    ],
  },
  {
    day: 2,
    date: "27 JUN (SAT)",
    title: "Farmers Market, Lighthouse & Caves",
    fact: "June and July are peak migration months for Humpback and Southern Right whales. Keep an eye out at Cape Leeuwin!",
    icon: "fa-binoculars",
    activities: [
      {
        time: "09:00",
        desc: "Breakfast at Margaret River Farmers Market",
        address: "Lot 272 Bussell Hwy, Margaret River WA 6285",
        tag: "activity",
        duration: "1.5 hours",
        tip: "Arrive early for the best artisan pastries. Bring cash just in case.",
      },
      {
        time: "10:30",
        desc: "Visit Cape Leeuwin Lighthouse & picnic",
        address: "Leeuwin Rd, Augusta WA 6290",
        tag: "activity",
        duration: "3 hours",
        tip: "It's the point where the Indian and Southern Oceans meet. Very windy—layer up!",
      },
      {
        time: "13:30",
        desc: "Explore Jewel Cave",
        address: "Jewel Caves Rd, Deepdene WA 6290",
        tag: "activity",
        duration: "1 hour",
        fact: "It features one of the longest straw stalactites found in any tourist cave in the world.",
      },
      {
        time: "15:50",
        desc: "Groceries at Woolworths + BWS",
        address: "49 Town View Terrace, Margaret River WA 6285",
        tag: "activity",
        duration: "55 mins",
        tip: "BWS is attached to Woolies. A great chance to grab local craft beers or casual wines.",
      },
      {
        time: "16:45",
        desc: "Petrol at Shell",
        address: "78 Bussell Hwy, Margaret River WA 6285",
        tag: "activity",
        duration: "30 mins",
        tip: "Sign up for a free Everyday Rewards card for potential fuel discounts.",
      },
      {
        time: "17:15",
        desc: "Laundry time",
        tag: "laundry",
        duration: "5 mins",
        tip: "Great time to backup your trip photos over Wi-Fi while the wash runs.",
      },
      {
        time: "17:20",
        desc: "Sue's workout (ends 6:15pm)",
        tag: "exercise",
        duration: "55 mins",
      },
      {
        time: "19:15",
        desc: "Dinner at Swings & Roundabouts",
        address: "85 Bussell Hwy, Margaret River WA 6285",
        tag: "booking",
        duration: "1.5 hours",
        tip: "Famous for their rustic wood-fired pizzas and excellent relaxed wine pairings.",
      },
    ],
  },
  {
    day: 3,
    date: "28 JUN (SUN)",
    title: "Mass & Witchcliffe Vintage Shopping",
    fact: "Mammoth Cave is one of the few caves in Australia containing fossils of extinct giant marsupials (megafauna) from 50,000 years ago.",
    icon: "fa-camera-retro",
    activities: [
      {
        time: "09:30",
        desc: "Leave for Sunday Mass",
        address: "Augusta Margaret River Catholic Parish",
        tag: "activity",
        duration: "1 hour",
        tip: "Arrive 10-15 mins early to find comfortable parking.",
      },
      {
        time: "10:30",
        desc: "Witchcliffe Farmers Market",
        address: "10418 Bussell Hwy, Witchcliffe WA 6286",
        tag: "activity",
        duration: "1h 15m",
        tip: "Smaller and more intimate than MR Farmers Market. Great for niche local crafts.",
      },
      {
        time: "11:45",
        desc: "Lunch at Witchy Pies & Cakery",
        address: "19 Bussell Hwy, Witchcliffe WA 6286",
        tag: "activity",
        duration: "1 hour",
        tip: "Famous for chunky steak and local produce pies. The ultimate Australian winter warmer.",
      },
      {
        time: "12:45",
        desc: "Vintage shopping: Beanhead Records, LucyKat, Poolroom",
        address: "10399 Bussell Hwy, Witchcliffe WA 6286",
        tag: "activity",
        duration: "1h 45m",
        tip: "A vintage lover's paradise. Be prepared to dig for hidden gems and high-quality retro fashion.",
      },
      {
        time: "14:30",
        desc: "Coffee at Witchy Brews",
        address: "3 Redgate Rd, Witchcliffe WA 6286",
        tag: "activity",
        duration: "30 mins",
        tip: "Grab an Australian 'Flat White' to refuel after shopping.",
      },
      {
        time: "15:00",
        desc: "Self-guided tour of Mammoth Cave",
        address: "Caves Rd, Forest Grove WA 6286",
        tag: "activity",
        duration: "1.5 hours",
        fact: "Contains fossils of giant extinct marsupials (megafauna) dating back 50,000 years.",
      },
      {
        time: "16:30",
        desc: "Wine tasting at Mr Barval Fine Wines",
        address: "7087 Caves Rd, Margaret River WA 6286",
        tag: "activity",
        duration: "1.5 hours",
        tip: "They focus on traditional, old-world winemaking styles. Ask to taste their Cabernet blends.",
      },
      {
        time: "18:00",
        desc: "Laundry time",
        tag: "laundry",
        duration: "15 mins",
      },
      {
        time: "18:15",
        desc: "Takeaway Fish & Chips",
        address: "Hooked Up, Surfers Point Rd, Prevelly WA 6285",
        tag: "activity",
        duration: "45 mins",
        tip: "Eat it while it's hot! The coastal winter wind cools food down extremely fast.",
      },
      {
        time: "19:00",
        desc: "Dinner at apartment",
        tag: "activity",
        duration: "1.5 hours",
        tip: "Pop open the Mr Barval wine you bought earlier to enjoy with your dinner.",
      },
    ],
  },
  {
    day: 4,
    date: "29 JUN (MON)",
    title: "Yallingup Chocolate & Dunsborough",
    fact: "Winter is Truffle Season in Western Australia! Manjimup (just east of here) produces some of the world's finest black truffles.",
    icon: "fa-leaf",
    activities: [
      {
        time: "09:30",
        desc: "Breakfast at Gourmet Food Merchant",
        address: "4 Bottrill St, Cowaramup WA 6284",
        tag: "activity",
        duration: "1h 10m",
        tip: "Excellent spot to pick up locally made jams, honeys, and relishes as souvenirs.",
      },
      {
        time: "10:40",
        desc: "Gabriel Chocolate, Wulura Olive Oil",
        address: "219 Harmans Mill Rd, Metricup WA 6280",
        tag: "activity",
        duration: "1h 10m",
        tip: "Gabriel offers amazing bean-to-bar tastings. Don't skip the Wulura olive oil tasting either!",
      },
      {
        time: "11:50",
        desc: "Lunch at Wild Hop Brewing Company",
        address: "1301 Wildwood Rd, Yallingup WA 6282",
        tag: "activity",
        duration: "1h 40m",
        tip: "Bookings essential. They serve fantastic sharing plates that pair perfectly with craft beer.",
      },
      {
        time: "13:30",
        desc: "Dunsborough: Lions Shed, Cape Emporium",
        address: "6 Eyre St, Dunsborough WA 6281",
        tag: "activity",
        duration: "1h 15m",
        tip: "Lions Shed is an institution for second-hand treasures. Cash is king here.",
      },
      {
        time: "14:45",
        desc: "Devonshire Tea at Cape Lavender",
        address: "2 Canal Rocks Rd, Yallingup WA 6282",
        tag: "activity",
        duration: "1.5 hours",
        tip: "Their signature lavender scones served with thick cream and jam are a must-try.",
      },
      {
        time: "16:15",
        desc: "Groceries at Woolworths for dinner",
        address: "49 Town View Terrace, Margaret River WA 6285",
        tag: "activity",
        duration: "1 hour",
        tip: "Plan a hearty, easy-to-cook winter meal like a pasta bake or roast.",
      },
      {
        time: "17:15",
        desc: "Wine at Margaret River Liquor Merchants",
        address: "110 Bussell Hwy, Margaret River WA 6285",
        tag: "activity",
        duration: "25 mins",
        tip: "Ask the staff for 'under-the-radar' boutique wines you won't find in chain bottle shops.",
      },
      {
        time: "17:40",
        desc: "Laundry time",
        tag: "laundry",
        duration: "10 mins",
      },
      {
        time: "17:50",
        desc: "Sue's workout (ends 6:40pm)",
        tag: "exercise",
        duration: "50 mins",
      },
      {
        time: "19:00",
        desc: "Cook dinner at apartment",
        tag: "activity",
        duration: "2 hours",
        tip: "A great relaxed evening. Put on a playlist and cook together.",
      },
      {
        time: "21:00",
        desc: "Start packing bags",
        tag: "activity",
        duration: "1 hour",
        tip: "Roll clothes to save space, and securely pad any delicate bottles or antiques you've purchased.",
      },
    ],
  },
  {
    day: 5,
    date: "30 JUN (TUE)",
    title: "Busselton Jetty Day",
    fact: "The Busselton Jetty is the longest timber-piled pier in the Southern Hemisphere, stretching 1.8km over Geographe Bay.",
    icon: "fa-water",
    activities: [
      {
        time: "09:00",
        desc: "Coffee & toasties at Red Feather Coffee",
        address: "35 Bussell Hwy, Cowaramup WA 6284",
        tag: "activity",
        duration: "1 hour",
        tip: "A cozy spot to start a chilly morning. Their toasted sandwiches are highly rated.",
      },
      {
        time: "10:00",
        desc: "Shop Cowaramup: Mukau Giftware, Candy Cow",
        address: "69 Bussell Hwy, Cowaramup WA 6284",
        tag: "activity",
        duration: "1 hour",
        fact: "There are exactly 42 life-sized fiberglass cow statues scattered around this town.",
      },
      {
        time: "11:00",
        desc: "Wine & gin tasting at After Hours Wine",
        address: "455 N Jindong Rd, North Jindong WA 6280",
        tag: "activity",
        duration: "1h 15m",
        tip: "Known for fantastic small-batch gins. If someone is the designated driver, ask for spittoons.",
      },
      {
        time: "12:15",
        desc: "Lunch at Origins Market food court",
        address: "86 West St, Busselton WA 6280",
        tag: "activity",
        duration: "1h 45m",
        tip: "A brilliant indoor hub. You can all grab different local street foods and eat together.",
      },
      {
        time: "14:00",
        desc: "Walk Busselton Jetty (1.8km)",
        address: "17 Foreshore Parade, Busselton WA 6280",
        tag: "activity",
        duration: "1 hour",
        fact: "There is actually a fully submerged underwater observatory located at the very end of the pier.",
      },
      {
        time: "15:00",
        desc: "Busselton Books + The Good Egg Café",
        address: "38/44 Albert St, Busselton WA 6280",
        tag: "activity",
        duration: "1 hour",
        tip: "A perfect pairing—browse excellent second-hand books and read them over a warm brew.",
      },
      {
        time: "16:00",
        desc: "Groceries at Woolworths",
        address: "59-65 Kent St, Busselton WA 6280",
        tag: "activity",
        duration: "1 hour",
        tip: "Stock up on car snacks and water for tomorrow's longer drive back to Perth.",
      },
      {
        time: "17:00",
        desc: "Petrol at BP",
        address: "24 Albert St, Busselton WA 6280",
        tag: "activity",
        duration: "1h 10m",
        tip: "Fill up today so you don't have to worry about it during checkout tomorrow morning.",
      },
      {
        time: "18:10",
        desc: "Pack all bags for Perth",
        tag: "activity",
        duration: "1h 5m",
        tip: "Keep a separate small tote bag for items you'll need easily accessible in the car.",
      },
      {
        time: "19:15",
        desc: "Dinner at Burger Baby (Table for 5)",
        address: "2 Andrews Way, Margaret River WA 6285",
        tag: "booking",
        duration: "1.5 hours",
        tip: "A local favorite for elevated gourmet burgers and a fantastic craft beer selection.",
      },
    ],
  },
  {
    day: 6,
    date: "01 JUL (WED)",
    title: "Drive to Perth via Bunbury",
    fact: "Driving tip: Kangaroos are highly active at dusk and dawn. Be extra vigilant on the highways as the sun starts to set around 5:00 PM.",
    icon: "fa-car",
    activities: [
      {
        time: "09:10",
        desc: "Load car and checkout",
        tag: "activity",
        duration: "10 mins",
        tip: "Do a final sweep of all closets, under the beds, and bathroom doors before locking up.",
      },
      {
        time: "09:20",
        desc: "Breakfast at Red Feather Coffee",
        address: "35 Bussell Hwy, Cowaramup WA 6284",
        tag: "activity",
        duration: "55 mins",
        tip: "Grab a strong coffee—you have a fair bit of driving ahead of you today.",
      },
      {
        time: "10:15",
        desc: "Bunbury Wildlife Park",
        address: "7 Prince Philip Dr, South Bunbury WA 6230",
        tag: "activity",
        duration: "2 hours",
        tip: "Great for up-close native animal encounters without the massive crowds of a city zoo.",
      },
      {
        time: "12:15",
        desc: "Ramen lunch at Ramen Plus",
        address: "Shop 6/33 Clifton St, Bunbury WA 6230",
        tag: "activity",
        duration: "1.5 hours",
        tip: "A steaming bowl of ramen is the ultimate comfort food for a chilly July afternoon.",
      },
      {
        time: "13:45",
        desc: "Harvey Cheese & ice cream",
        address: "11442 S Western Hwy, Wokalup WA 6221",
        tag: "activity",
        duration: "1.5 hours",
        tip: "Sample their award-winning halloumi. They also sell great local preserves and dukkah.",
      },
      {
        time: "15:15",
        desc: "Blue Moon Collectables antiques",
        address: "Unit 1/5742 S Western Hwy, Pinjarra WA 6208",
        tag: "activity",
        duration: "2 hours",
        tip: "A massive warehouse full of antiques. Take your time, it's easy to lose an hour here!",
      },
      {
        time: "17:15",
        desc: "Check-in to Perth Airbnb",
        address: "15B Esperance St, East Victoria Park WA 6101",
        tag: "activity",
        duration: "1h 15m",
        tip: "Message the host 30 mins prior to arrival to ensure a smooth key handover.",
      },
      {
        time: "18:30",
        desc: "Nic & Sue get takeaway Fish & Chips + Charcoal Chicken",
        address: "256 Mill Point Rd, South Perth WA 6151",
        tag: "activity",
        duration: "30 mins",
        tip: "A classic Aussie takeaway combo. 'Chicken Treat' or local charcoal shops are staples here.",
      },
      {
        time: "19:00",
        desc: "Dinner at apartment",
        tag: "activity",
        duration: "2 hours",
        tip: "Unpack, relax, and settle into your new Perth home base for the second leg of the trip.",
      },
    ],
  },
  {
    day: 7,
    date: "02 JUL (THU)",
    title: "Swan Valley Hiking & Wine",
    fact: "The Swan Valley is Western Australia's oldest wine region. The very first vines were planted here way back in 1829.",
    icon: "fa-mountain-sun",
    activities: [
      {
        time: "09:00",
        desc: "Coffee at Exile Coffee, then hike Bells Rapids",
        address: "Orlov Trail, Cathedral Ave, Brigadoon WA 6069",
        tag: "activity",
        duration: "2h 50m",
        tip: "Moderate difficulty with some uneven ground. The river flows fastest in winter!",
      },
      {
        time: "11:50",
        desc: "Clean shoes before getting in car",
        tag: "activity",
        duration: "10 mins",
        tip: "Red Australian dirt stains easily. Keep some wet wipes in the car.",
      },
      {
        time: "12:00",
        desc: "Lunch at Gerry's Deli & Pizzeria",
        address: "10250 W Swan Rd, Henley Brook WA 6055",
        tag: "activity",
        duration: "1.5 hours",
        tip: "A classic Italian-style deli. Hearty and unpretentious—perfect after a morning hike.",
      },
      {
        time: "13:30",
        desc: "The Barn @ Taylor's antiques",
        address: "George Rd, Middle Swan WA 6056",
        tag: "activity",
        duration: "30 mins",
        fact: "Housed in a rustic stable block from the early 1900s.",
      },
      {
        time: "14:00",
        desc: "Wine tasting at Garbin Estate",
        address: "209 Toodyay Rd, Middle Swan WA 6056",
        tag: "activity",
        duration: "45 mins",
        tip: "A lovely family-run boutique winery. They are renowned for their excellent Chenin Blanc.",
      },
      {
        time: "14:45",
        desc: "Annie's COLLECTIVE Wonderland vintage",
        address: "22-24 Clayton St, Bellevue WA 6056",
        tag: "activity",
        duration: "45 mins",
        tip: "Eclectic and quirky. Great for jewelry, homewares, and random nostalgic finds.",
      },
      {
        time: "15:30",
        desc: "Guildford: Georges Furniture + Book Exchange",
        address: "189 James St, Guildford WA 6055",
        tag: "activity",
        duration: "50 mins",
        tip: "Guildford is Perth's main antique hub. Lots of convict history in these streets.",
      },
      {
        time: "16:20",
        desc: "Groceries at Woolworths Perth Airport",
        address: "10 High St, Perth Airport WA 6105",
        tag: "activity",
        duration: "40 mins",
        tip: "This Woolworths is huge and often carries premium items you won't find in smaller stores.",
      },
      {
        time: "17:00",
        desc: "Petrol at Costco",
        address: "142 Dunreath Dr, Perth Airport WA 6105",
        tag: "activity",
        duration: "50 mins",
        tip: "Make sure you have your physical or digital Costco membership card ready to scan.",
      },
      {
        time: "17:50",
        desc: "Laundry time",
        tag: "laundry",
        duration: "1h 10m",
      },
      {
        time: "19:00",
        desc: "Dinner at Izakaya Tori",
        address: "610 Albany Hwy, Victoria Park WA 6100",
        tag: "booking",
        duration: "2 hours",
        tip: "Authentic, buzzing Japanese vibes. Highly recommend ordering the yakitori skewers to share.",
      },
    ],
  },
  {
    day: 8,
    date: "03 JUL (FRI)",
    title: "Fremantle Markets & Brewery",
    fact: "Fremantle Markets have been operating since 1897. It is one of only two surviving municipal market buildings in WA.",
    icon: "fa-store",
    activities: [
      {
        time: "09:40",
        desc: "Breakfast at Eggspot Fremantle",
        address: "Fremantle Markets, 71 Parry St, Fremantle WA 6160",
        tag: "activity",
        duration: "35 mins",
        tip: "Known for their incredibly fluffy brioche egg sandwiches. Grab lots of napkins!",
      },
      {
        time: "10:15",
        desc: "Coffee at The Coffee Connection",
        address: "South Terrace & Henderson St, Fremantle WA 6160",
        tag: "activity",
        duration: "15 mins",
        tip: "A Freo staple located right inside the markets. Great place to sit and people-watch.",
      },
      {
        time: "10:30",
        desc: "Explore: Mills Records, Elizabeth's Bookshop",
        address: "22 Adelaide St, Fremantle WA 6160",
        tag: "activity",
        duration: "1h 45m",
        tip: "Elizabeth's 'Blind Date with a Book' (wrapped in brown paper) makes a fantastic holiday read.",
      },
      {
        time: "12:15",
        desc: "Lunch at Grill'd Fremantle",
        address: "South Terrace Corner, Collie St, Fremantle WA 6160",
        tag: "activity",
        duration: "1.5 hours",
        tip: "A reliable, healthy refuel option. Freo's 'Cappuccino Strip' is right outside.",
      },
      {
        time: "13:45",
        desc: "Shopping: Common Ground, Ginger Pudding Vintage",
        address: "61 High St, Fremantle WA 6160",
        tag: "activity",
        duration: "1h 15m",
        tip: "Common Ground is excellent for supporting local independent Western Australian designers.",
      },
      {
        time: "15:00",
        desc: "Coffee break at Common Bakery",
        address: "19 High St, Fremantle WA 6160",
        tag: "activity",
        duration: "1 hour",
        tip: "Their sourdough pastries are top-tier. Grab a sweet treat to eat now or take home.",
      },
      {
        time: "16:00",
        desc: "Little Creatures Brewery",
        address: "40 Mews Rd, Fremantle WA 6160",
        tag: "activity",
        duration: "2h 20m",
        tip: "Arrive early on Fridays to snag a good table by the water. Try the Pale Ale!",
      },
      {
        time: "18:20",
        desc: "Dinner with Shirley & Daniel at Jumbo BBQ",
        address: "2/1140 Albany Hwy, Bentley WA 6102",
        tag: "booking",
        duration: "2 hours",
        tip: "A fantastic sharing dinner. A nice change of flavor after days of Western/pub food.",
      },
    ],
  },
  {
    day: 9,
    date: "04 JUL (SAT)",
    title: "Subiaco Market & Shopping",
    fact: "Subiaco (known locally as 'Subi') is famous for its heritage architecture, leafy streets, and European-style village atmosphere.",
    icon: "fa-bag-shopping",
    activities: [
      {
        time: "09:00",
        desc: "Subiaco Farmers Market breakfast",
        address: "271 Bagot Rd, Subiaco WA 6008",
        tag: "activity",
        duration: "1.5 hours",
        tip: "One of the oldest farmers markets in WA. Grab a hot coffee and browse the artisan stalls.",
      },
      {
        time: "10:30",
        desc: "Pick strawberries at Hoang Le's",
        address: "120 Trichet Rd, Wanneroo WA 6065",
        tag: "activity",
        duration: "1h 45m",
        fact: "Winter is prime strawberry season in WA—expect them to be massive, ruby red, and super sweet.",
      },
      {
        time: "12:15",
        desc: "Lunch at Pink Moon & Co",
        address: "Shop 16/12 Harrison St, Balcatta WA 6021",
        tag: "activity",
        duration: "1h 45m",
        tip: "Chic aesthetic and a slightly more upscale menu. A great spot to relax midway through the day.",
      },
      {
        time: "14:00",
        desc: "Sue's shopping at Karrinyup",
        address: "200 Karrinyup Rd, Karrinyup WA 6018",
        tag: "activity",
        duration: "1h 45m",
        fact: "This is one of Perth's premier shopping centers following a recent $800M expansion.",
      },
      {
        time: "15:45",
        desc: "Groceries at Woolworths Karrinyup",
        address: "200 Karrinyup Rd, Karrinyup WA 6018",
        tag: "activity",
        duration: "1h 35m",
        tip: "Karrinyup gets very busy on Saturday afternoons, so divide and conquer the shopping list!",
      },
      {
        time: "17:20",
        desc: "Laundry time",
        tag: "laundry",
        duration: "10 mins",
        tip: "Final wash of the trip! Make sure everything is clean before packing tomorrow.",
      },
      {
        time: "17:30",
        desc: "Sue's workout (ends 6:20pm)",
        tag: "exercise",
        duration: "50 mins",
      },
      {
        time: "19:00",
        desc: "Cook dinner at apartment",
        tag: "activity",
        duration: "2 hours",
        tip: "Use up any remaining local cheeses, wines, and fridge items you don't want to throw away.",
      },
      {
        time: "21:00",
        desc: "Start packing bags",
        tag: "activity",
        duration: "1 hour",
        tip: "Weigh your bags tonight to avoid stressful repacking at the airport counter.",
      },
    ],
  },
  {
    day: 10,
    date: "05 JUL (SUN)",
    title: "Sunday Mass & Final Day",
    fact: "Perth is officially the sunniest capital city in the world, averaging 8 hours of sunshine per day, even during the winter months!",
    icon: "fa-sun",
    activities: [
      {
        time: "09:00",
        desc: "Sunday Mass",
        address: "5 Ingham Ct, Willetton WA 6155",
        tag: "activity",
        duration: "1 hour",
        tip: "A peaceful start to your final full day in Australia.",
      },
      {
        time: "10:00",
        desc: "Freo Farmers Market breakfast",
        address: "Bruce Lee Oval, 5 Caesar St, Beaconsfield WA 6162",
        tag: "activity",
        duration: "2 hours",
        tip: "Has a much more alternative, bohemian vibe compared to Subiaco. Often features great live local music.",
      },
      {
        time: "12:00",
        desc: "The Gossamer Project vintage",
        address: "266 South Terrace, South Fremantle WA 6162",
        tag: "activity",
        duration: "30 mins",
        tip: "Beautifully curated vintage clothing. Expect high-quality, unique, and slightly higher-end pieces here.",
      },
      {
        time: "12:30",
        desc: "Lunch at The Pickled Octopus",
        address: "Dog Beach, Fremantle WA 6162",
        tag: "activity",
        duration: "1.5 hours",
        tip: "Nothing beats eating fresh WA seafood right by the ocean, even if you are wearing a winter jacket!",
      },
      {
        time: "14:00",
        desc: "Petrol at Shell",
        address: "1128 Albany Hwy, Bentley WA 6102",
        tag: "activity",
        duration: "1 hour",
        tip: "Rental cars need to be returned full. Top it up here to save the massive airport fuel surcharge.",
      },
      {
        time: "15:00",
        desc: "Churros at San Churro",
        address: "848 Albany Hwy, East Victoria Park WA 6101",
        tag: "activity",
        duration: "1h 15m",
        tip: "Their Spanish hot chocolate is incredibly thick and rich—the absolute perfect winter dessert.",
      },
      {
        time: "16:15",
        desc: "Final packing",
        tag: "activity",
        duration: "1 hour",
        tip: "Remember: Liquid items over 100ml (including jams/honey) MUST go in checked baggage!",
      },
      {
        time: "17:15",
        desc: "Sue's final workout",
        tag: "exercise",
        duration: "1.5 hours",
        tip: "A good heavy session before being seated on an airplane for 5 hours tomorrow.",
      },
      {
        time: "18:45",
        desc: "Farewell dinner at Salt & Pepper Grill",
        address: "55 George St, Kensington WA 6151",
        tag: "booking",
        duration: "2 hours",
        tip: "A cozy spot to reflect on the trip, share favorite memories, and enjoy a final great meal together.",
      },
    ],
  },
  {
    day: 11,
    date: "06 JUL (MON)",
    title: "Flight Home to Singapore",
    fact: "Customs reminder: Singapore allows up to 2 litres of duty-free liquor per person. Make sure your wine is packed securely in checked baggage!",
    icon: "fa-plane-departure",
    activities: [
      {
        time: "06:00",
        desc: "Wake up and final check",
        tag: "activity",
        duration: "1 hour",
        tip: "Check all power outlets for forgotten phone chargers and adaptors.",
      },
      {
        time: "07:00",
        desc: "Drive to airport, return car to H20 Rentals",
        address: "Perth Airport Terminal 1, Horrie Miller Dr",
        tag: "activity",
        duration: "20 mins",
        tip: "Take quick photos of the car's exterior and the dashboard fuel gauge before handing back the keys.",
      },
      {
        time: "07:20",
        desc: "Check-in baggage (Sue 30kg, others 25kg)",
        tag: "activity",
        duration: "55 mins",
        tip: "Have your passports and digital boarding passes ready. Use the automated bag drop if available.",
      },
      {
        time: "08:15",
        desc: "Breakfast at Co & Co cafe",
        tag: "activity",
        duration: "1h 40m",
        tip: "Your last chance for a proper Australian flat white before flying home!",
      },
      {
        time: "09:55",
        desc: "Flight TR17 departs Perth. Arrive Singapore 3:15pm",
        tag: "activity",
        duration: "5h 20m",
        fact: "Don't forget to submit your SG Arrival Card within 3 days prior to landing.",
      },
    ],
  },
]; // <-- CLOSE the tripData array

// NOW continue with the rest of your script...
// (All the Parts 1-6 that you already have)

// ===== PART 1: INIT & THEME SYSTEM =====

// Trip data defined elsewhere or imported

let currentDay = 1;
let allActivities = [];
let themeCheckInterval = null;

// THEME CONFIGURATION

const THEME_CONFIG = {
  locations: {
    margaretRiver: { lat: -33.95, lng: 115.08, name: "Margaret River" },
    perth: { lat: -31.95, lng: 115.86, name: "Perth" },
    singapore: { lat: 1.35, lng: 103.82, name: "Singapore" },
  },
  fallback: {
    sunrise: 7 * 60 + 15, // 7:15 AM in minutes since midnight
    sunset: 17 * 60 + 20, // 5:20 PM
  },
};

// --- Initialization ---

function init() {
  initThemeSystem();
  createDayTabs();
  showDay(1);
  startCountdown();
  setupSearch();
  setupFAB();
  setupCurrencyWidget();
  setupTripInfo();
}

// --- Theme System Initialization ---

function initThemeSystem() {
  loadTheme();
  setupThemeToggle();
  startAutoThemeChecker();
}

// --- Load Theme from localStorage or Default Auto ---

function loadTheme() {
  const savedMode = localStorage.getItem("themeMode") || "auto";
  applyThemeMode(savedMode, true);
}

// --- Setup Theme Toggle Button to cycle modes ---

function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  themeToggle.addEventListener("click", function () {
    const currentMode = localStorage.getItem("themeMode") || "auto";
    let nextMode;
    if (currentMode === "auto") nextMode = "light";
    else if (currentMode === "light") nextMode = "dark";
    else nextMode = "auto";

    localStorage.setItem("themeMode", nextMode);
    applyThemeMode(nextMode);

    // Simple animation feedback
    themeToggle.style.transform = "rotate(180deg) scale(0.9)";
    setTimeout(() => {
      themeToggle.style.transform = "";
    }, 300);
  });
}

// --- Apply Theme Mode ---

function applyThemeMode(mode, isInitial = false) {
  const themeToggle = document.getElementById("themeToggle");

  if (mode === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    if (themeToggle)
      themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i><span class="theme-mode-label">Light</span>';
  } else if (mode === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeToggle)
      themeToggle.innerHTML =
        '<i class="fa-solid fa-moon"></i><span class="theme-mode-label">Dark</span>';
  } else {
    // Auto Mode: calculate based on time/sunrise/sunset
    const shouldBeDark = isNightTime();
    document.documentElement.setAttribute(
      "data-theme",
      shouldBeDark ? "dark" : "light"
    );
    if (themeToggle)
      themeToggle.innerHTML =
        '<i class="fa-solid fa-circle-half-stroke"></i><span class="theme-mode-label">Auto</span>';

    if (!isInitial) {
      showThemeNotification(
        "Auto theme enabled • Based on " + getCurrentLocation().name
      );
    }
  }
}
// ===== PART 2: THEME HELPERS & LOCATION DETECTION =====

// --- Get Current Location based on trip dates ---

function getCurrentLocation() {
  const now = new Date();
  const tripStart = new Date("2026-06-26");
  const tripEnd = new Date("2026-07-06");

  // Before or after trip: Singapore
  if (now < tripStart || now > tripEnd) {
    return THEME_CONFIG.locations.singapore;
  }

  // During trip: check which day
  const dayNum = Math.ceil((now - tripStart) / (1000 * 60 * 60 * 24));

  if (dayNum >= 1 && dayNum <= 5) {
    return THEME_CONFIG.locations.margaretRiver;
  } else {
    return THEME_CONFIG.locations.perth;
  }
}

// --- Check if it's Night Time based on sunrise/sunset ---

function isNightTime() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  try {
    const location = getCurrentLocation();
    const times = calculateSunTimes(location.lat, location.lng, now);

    // Night time if before sunrise or after sunset
    return currentMinutes < times.sunrise || currentMinutes > times.sunset;
  } catch (error) {
    console.warn("Sun calculation failed, using fallback times", error);
    return (
      currentMinutes < THEME_CONFIG.fallback.sunrise ||
      currentMinutes > THEME_CONFIG.fallback.sunset
    );
  }
}

// --- Calculate Sunrise and Sunset times ---

function calculateSunTimes(lat, lng, date) {
  // Simplified sun calculation (accurate enough for theme switching)
  // Based on: https://en.wikipedia.org/wiki/Sunrise_equation

  const dayOfYear = Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
  const latRad = (lat * Math.PI) / 180;

  // Solar declination
  const declination =
    -23.44 * Math.cos(((360 / 365) * (dayOfYear + 10) * Math.PI) / 180);
  const declinationRad = (declination * Math.PI) / 180;

  // Hour angle
  const hourAngle = Math.acos(-Math.tan(latRad) * Math.tan(declinationRad));
  const hourAngleDeg = (hourAngle * 180) / Math.PI;

  // Solar noon (minutes from midnight)
  const solarNoon = 720 - 4 * lng - date.getTimezoneOffset();

  // Sunrise and sunset (minutes from midnight)
  const sunrise = solarNoon - 4 * hourAngleDeg;
  const sunset = solarNoon + 4 * hourAngleDeg;

  return {
    sunrise: Math.round(sunrise),
    sunset: Math.round(sunset),
  };
}

// --- Auto Theme Checker (runs every minute) ---

function startAutoThemeChecker() {
  // Clear any existing interval
  if (themeCheckInterval) clearInterval(themeCheckInterval);

  // Check every minute if in auto mode
  themeCheckInterval = setInterval(() => {
    const mode = localStorage.getItem("themeMode") || "auto";
    if (mode === "auto") {
      const shouldBeDark = isNightTime();
      const currentTheme = document.documentElement.getAttribute("data-theme");

      // Only update if theme needs to change
      if (
        (shouldBeDark && currentTheme !== "dark") ||
        (!shouldBeDark && currentTheme !== "light")
      ) {
        applyThemeMode("auto");
        console.log("🌓 Auto theme switched:", shouldBeDark ? "dark" : "light");
      }
    }
  }, 60000); // Check every minute

  // Also check immediately
  const mode = localStorage.getItem("themeMode") || "auto";
  if (mode === "auto") {
    applyThemeMode("auto", true);
  }
}

// --- Show Theme Notification Toast ---

function showThemeNotification(message) {
  const toast = document.createElement("div");
  toast.style.cssText = `
    position: fixed;
    top: 90px;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    box-shadow: var(--shadow-lg);
    z-index: 9999;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-primary);
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
  }, 10);

  // Animate out and remove
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(-20px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- Debug Info (accessible via console) ---

window.getThemeDebugInfo = function () {
  const location = getCurrentLocation();
  const times = calculateSunTimes(location.lat, location.lng, new Date());
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return {
    location: location.name,
    currentTime: now.toLocaleTimeString(),
    currentMinutes: currentMinutes,
    sunrise:
      Math.floor(times.sunrise / 60) +
      ":" +
      String(times.sunrise % 60).padStart(2, "0"),
    sunset:
      Math.floor(times.sunset / 60) +
      ":" +
      String(times.sunset % 60).padStart(2, "0"),
    isNightTime: isNightTime(),
    themeMode: localStorage.getItem("themeMode") || "auto",
    currentTheme: document.documentElement.getAttribute("data-theme"),
  };
};
// ===== PART 3: DAY NAVIGATION & ACTIVITY CARDS =====

// --- Create Day Navigation Tabs ---

function createDayTabs() {
  const tabsContainer = document.getElementById("dayTabs");
  if (!tabsContainer) return;
  tabsContainer.innerHTML = "";

  tripData.forEach(function (day) {
    const tab = document.createElement("button");
    tab.className = "tab";
    const span = document.createElement("span");
    span.textContent = "Day " + day.day;
    tab.appendChild(span);

    tab.addEventListener("click", function () {
      currentDay = day.day;
      showDay(day.day);
    });
    tabsContainer.appendChild(tab);
  });
}

// --- Show Specific Day Content ---

function showDay(dayNum) {
  // Update active tab
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab, index) {
    if (index + 1 === dayNum) {
      tab.classList.add("active");
      tab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    } else {
      tab.classList.remove("active");
    }
  });

  // Get day data
  const dayData = tripData.find(function (d) {
    return d.day === dayNum;
  });
  if (!dayData) return;

  // Update header info
  if (document.getElementById("currentDate"))
    document.getElementById("currentDate").textContent = dayData.date;
  if (document.getElementById("currentTitle"))
    document.getElementById("currentTitle").textContent = dayData.title;
  if (document.getElementById("insightText"))
    document.getElementById("insightText").textContent = dayData.fact;
  if (document.getElementById("insightIcon"))
    document.getElementById("insightIcon").innerHTML =
      '<i class="fa-solid ' + dayData.icon + '"></i>';

  // Render activities
  const timeline = document.getElementById("timeline");
  if (timeline) {
    timeline.innerHTML = "";
    allActivities = [];

    dayData.activities.forEach(function (activity, index) {
      const activityId = "day" + dayNum + "-activity" + index;
      const card = createActivityCard(activity, activityId);
      timeline.appendChild(card);
      allActivities.push({
        element: card,
        text: (
          activity.desc +
          " " +
          (activity.address || "") +
          " " +
          (activity.tip || "") +
          " " +
          (activity.fact || "")
        ).toLowerCase(),
      });
    });
  }

  // Update weather and progress
  fetchWeather(dayNum);
  setTimeout(updateProgress, 100);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- Create Individual Activity Card ---

function createActivityCard(activity, activityId) {
  const card = document.createElement("div");
  card.className = "activity";

  // Determine tag label and class
  let tagLabel = "Activity";
  let tagClass = "tag-activity";
  if (activity.tag === "laundry") {
    tagLabel = "Laundry";
    tagClass = "tag-laundry";
  } else if (activity.tag === "exercise") {
    tagLabel = "Exercise";
    tagClass = "tag-exercise";
  } else if (activity.tag === "booking") {
    tagLabel = "Booking";
    tagClass = "tag-booking";
  }

  const isChecked = getCheckboxState(activityId);

  // Build HTML
  let html =
    '<div class="activity-header"><div class="time">' +
    activity.time +
    "</div>";
  html += '<div style="display: flex; align-items: center; gap: 0.75rem;">';
  html +=
    '<input type="checkbox" class="activity-checkbox" id="' +
    activityId +
    '" ' +
    (isChecked ? "checked" : "") +
    " />";
  html +=
    '<div class="tag ' + tagClass + '">' + tagLabel + "</div></div></div>";
  html += '<div class="desc">' + escapeHTML(activity.desc) + "</div>";

  if (activity.duration)
    html +=
      '<div class="duration"><i class="fa-regular fa-clock"></i> ' +
      activity.duration +
      "</div>";

  // Render tip or fact
  if (activity.tip) {
    html +=
      '<div class="inline-tip"><i class="fa-solid fa-lightbulb"></i> ' +
      escapeHTML(activity.tip) +
      "</div>";
  }
  if (activity.fact) {
    html +=
      '<div class="inline-fact"><i class="fa-solid fa-circle-info"></i> ' +
      escapeHTML(activity.fact) +
      "</div>";
  }

  // Add map and copy buttons if address exists
  if (activity.address) {
    const mapUrl =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(activity.address);
    html += '<div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">';
    html +=
      '<a href="' +
      mapUrl +
      '" target="_blank" rel="noopener" class="map-link"><i class="fa-solid fa-location-dot"></i> Open Map</a>';
    html +=
      '<button class="map-link copy-address-btn" data-address="' +
      escapeHTML(activity.address) +
      '" style="background: var(--bg-primary); color: var(--text-primary); border: 1px solid var(--border);"><i class="fa-regular fa-copy"></i> Copy</button>';
    html += "</div>";
  }

  card.innerHTML = html;

  // Attach checkbox listener
  const checkbox = card.querySelector(".activity-checkbox");
  if (checkbox) {
    checkbox.addEventListener("change", function () {
      saveCheckboxState(activityId, this.checked);
      card.style.opacity = this.checked ? "0.6" : "1";
      card.style.textDecoration = this.checked ? "line-through" : "none";
      updateProgress();
    });
  }

  // Apply checked state styling
  if (isChecked) {
    card.style.opacity = "0.6";
    card.style.textDecoration = "line-through";
  }

  return card;
}

// --- Escape HTML to prevent XSS ---

function escapeHTML(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// --- Handle Copy Address Button (Event Delegation) ---

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("copy-address-btn") ||
    e.target.closest(".copy-address-btn")
  ) {
    const btn = e.target.classList.contains("copy-address-btn")
      ? e.target
      : e.target.closest(".copy-address-btn");
    const address = btn.getAttribute("data-address");

    if (navigator.clipboard && address) {
      navigator.clipboard.writeText(address).then(function () {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        btn.style.color = "var(--tip-color)";
        btn.style.borderColor = "var(--tip-color)";
        setTimeout(function () {
          btn.innerHTML = originalHTML;
          btn.style.color = "var(--text-primary)";
          btn.style.borderColor = "var(--border)";
        }, 2000);
      });
    }
  }
});

// --- Checkbox State Management ---

function saveCheckboxState(id, checked) {
  let savedStates = JSON.parse(
    localStorage.getItem("activityCheckboxes") || "{}"
  );
  savedStates[id] = checked;
  localStorage.setItem("activityCheckboxes", JSON.stringify(savedStates));
}

function getCheckboxState(id) {
  let savedStates = JSON.parse(
    localStorage.getItem("activityCheckboxes") || "{}"
  );
  return savedStates[id] || false;
}
// ===== PART 4: SEARCH, COUNTDOWN & PROGRESS TRACKING =====

// --- Countdown Timer to Trip Start ---

function startCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;
  const tripStart = new Date("June 26, 2026 09:00:00").getTime();

  function update() {
    const diff = tripStart - new Date().getTime();
    if (diff < 0) {
      countdown.innerHTML = '<i class="fa-solid fa-plane"></i> Trip Started!';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.innerHTML =
      '<i class="fa-solid fa-calendar"></i> ' +
      days +
      " day" +
      (days !== 1 ? "s" : "") +
      " until departure";
  }
  update();
  setInterval(update, 60000); // Update every minute
}

// --- Search Functionality - Dropdown Results ---

function setupSearch() {
  const searchBox = document.getElementById("searchBox");
  const searchInfo = document.getElementById("searchInfo");
  const searchResults = document.getElementById("searchResults");
  const clearBtn = document.getElementById("clearSearch");

  if (!searchBox || !searchInfo || !searchResults) return;

  let searchTimer;

  // Search input handler
  searchBox.addEventListener("input", function (e) {
    clearTimeout(searchTimer);
    const query = e.target.value.trim();

    // Show/hide clear button
    if (clearBtn) {
      clearBtn.style.display = query ? "block" : "none";
    }

    searchTimer = setTimeout(function () {
      if (query === "") {
        searchResults.classList.remove("active");
        searchResults.innerHTML = "";
        searchInfo.textContent = "";
        return;
      }

      performSearch(query.toLowerCase());
    }, 300); // Debounce 300ms
  });

  // Clear button handler
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      searchBox.value = "";
      searchResults.classList.remove("active");
      searchResults.innerHTML = "";
      searchInfo.textContent = "";
      clearBtn.style.display = "none";
      searchBox.focus();
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-bar")) {
      searchResults.classList.remove("active");
    }
  });

  // Reopen dropdown when clicking search box (if has results)
  searchBox.addEventListener("focus", function () {
    if (searchResults.innerHTML && searchBox.value.trim()) {
      searchResults.classList.add("active");
    }
  });
}

// --- Perform Search Across All Days ---

function performSearch(query) {
  const searchResults = document.getElementById("searchResults");
  const searchInfo = document.getElementById("searchInfo");
  const escapedQuery = escapeRegex(query);

  let matchingActivities = [];

  // Search all days
  tripData.forEach(function (day) {
    day.activities.forEach(function (activity, actIndex) {
      const searchText = (
        activity.desc +
        " " +
        (activity.address || "") +
        " " +
        (activity.tip || "") +
        " " +
        (activity.fact || "")
      ).toLowerCase();

      if (searchText.includes(query)) {
        matchingActivities.push({
          day: day.day,
          dayTitle: day.title,
          activity: activity,
          activityIndex: actIndex,
        });
      }
    });
  });

  // Display results
  if (matchingActivities.length === 0) {
    searchInfo.textContent = "No results";
    searchResults.innerHTML =
      '<div class="search-no-results"><i class="fa-solid fa-magnifying-glass" style="font-size:2rem; opacity:0.3; margin-bottom:0.5rem;"></i><br>No activities found for "' +
      escapeHTML(query) +
      '"</div>';
    searchResults.classList.add("active");
  } else {
    searchInfo.textContent =
      matchingActivities.length +
      " result" +
      (matchingActivities.length !== 1 ? "s" : "");

    // Build results HTML
    let resultsHTML = "";
    matchingActivities.forEach(function (match) {
      const highlightedDesc = escapeHTML(match.activity.desc).replace(
        new RegExp("(" + escapedQuery + ")", "gi"),
        '<mark class="highlight">$1</mark>'
      );

      resultsHTML +=
        '<div class="search-result-item" data-day="' + match.day + '">';
      resultsHTML +=
        '<div class="search-result-day">Day ' +
        match.day +
        " • " +
        match.dayTitle +
        "</div>";
      resultsHTML +=
        '<div class="search-result-time">' + match.activity.time + "</div>";
      resultsHTML +=
        '<div class="search-result-desc">' + highlightedDesc + "</div>";

      if (match.activity.address) {
        resultsHTML +=
          '<div class="search-result-meta"><i class="fa-solid fa-location-dot"></i> ' +
          escapeHTML(match.activity.address) +
          "</div>";
      }

      resultsHTML += "</div>";
    });

    searchResults.innerHTML = resultsHTML;
    searchResults.classList.add("active");

    // Add click handlers to navigate to day
    searchResults
      .querySelectorAll(".search-result-item")
      .forEach(function (item) {
        item.addEventListener("click", function () {
          const dayNum = parseInt(this.getAttribute("data-day"));
          currentDay = dayNum;
          showDay(dayNum);
          searchResults.classList.remove("active");

          // Scroll to top smoothly
          window.scrollTo({ top: 0, behavior: "smooth" });

          // Optional: Clear search after selection
          // document.getElementById('searchBox').value = '';
          // document.getElementById('searchInfo').textContent = '';
        });
      });
  }
}

// --- Render Search Results Grouped by Day ---

function renderSearchResults(matches, escapedQuery) {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  timeline.innerHTML = "";
  allActivities = [];

  let currentDayInResults = null;

  matches.forEach(function (match, index) {
    // Add day header if it's a new day
    if (currentDayInResults !== match.day) {
      currentDayInResults = match.day;

      const dayHeader = document.createElement("div");
      dayHeader.className = "search-day-header";
      dayHeader.innerHTML =
        '<div style="display:flex; align-items:center; gap:1rem; margin:2rem 0 1rem; padding-bottom:0.75rem; border-bottom:2px solid var(--border);">' +
        '<span style="font-size:0.85rem; font-weight:700; color:var(--accent-3); text-transform:uppercase; letter-spacing:0.1em;">Day ' +
        match.day +
        "</span>" +
        '<span style="font-size:0.95rem; color:var(--text-secondary); font-weight:500;">' +
        match.dayTitle +
        "</span>" +
        "</div>";
      timeline.appendChild(dayHeader);
    }

    // Create activity card
    const activityId = "search-day" + match.day + "-activity" + index;
    const card = createActivityCard(match.activity, activityId);

    // Highlight matching text
    const desc = card.querySelector(".desc");
    if (desc) {
      desc.innerHTML = desc.innerHTML.replace(
        new RegExp("(" + escapedQuery + ")", "gi"),
        '<mark class="highlight">$1</mark>'
      );
    }

    timeline.appendChild(card);
    allActivities.push({
      element: card,
      text: "",
    });
  });
}

// --- Escape Regex Special Characters ---

function escapeRegex(str) {
  return str.replace(/[.*+?^\${}()|[\]\\]/g, "\\__CODE_0__");
}

// --- Update Daily Progress Bar ---

function updateProgress() {
  const checkboxes = document.querySelectorAll(".activity-checkbox");
  const dayProgress = document.getElementById("dayProgress");
  const progressText = document.getElementById("progressText");

  if (!dayProgress || !progressText) return;

  if (checkboxes.length === 0) {
    dayProgress.style.width = "0%";
    progressText.textContent = "0% (0/0)";
    return;
  }

  const checkedBoxes = document.querySelectorAll(".activity-checkbox:checked");
  const percent = Math.round((checkedBoxes.length / checkboxes.length) * 100);

  dayProgress.style.width = percent + "%";
  progressText.textContent =
    percent + "% (" + checkedBoxes.length + "/" + checkboxes.length + ")";
}
// ===== PART 5: WEATHER WIDGET & CURRENCY CONVERTER =====

// --- Fetch Weather Data (with fallback) ---

async function fetchWeather(dayNum) {
  const weatherDiv = document.getElementById("liveWeather");
  if (!weatherDiv) return;

  weatherDiv.style.flexDirection = "column";
  weatherDiv.style.alignItems = "flex-start";
  weatherDiv.style.gap = "0.25rem";
  weatherDiv.innerHTML =
    '<div style="display:flex; gap:0.5rem; align-items:center;"><i class="fa-solid fa-spinner fa-spin"></i> Fetching weather...</div>';

  const isDownSouth = dayNum <= 5;
  const locationName = isDownSouth ? "Margaret River" : "Perth";

  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=" +
      (isDownSouth ? -33.95 : -31.95) +
      "&longitude=" +
      (isDownSouth ? 115.08 : 115.86) +
      "&current=temperature_2m,weather_code,apparent_temperature,wind_speed_10m&hourly=precipitation_probability&timezone=Australia%2FPerth&forecast_days=2";

    const response = await fetch(url);
    if (!response.ok) throw new Error("API Blocked");

    const data = await response.json();
    const temp = Math.round(data.current.temperature_2m);
    const code = data.current.weather_code;
    const feelsLike = Math.round(data.current.apparent_temperature);
    const wind = Math.round(data.current.wind_speed_10m);

    const timeIndex = data.hourly.time.indexOf(data.current.time);
    const rainChance =
      timeIndex !== -1 ? data.hourly.precipitation_probability[timeIndex] : 0;

    // Weather icon mapping
    let icon = "fa-cloud";
    if (code === 0) icon = "fa-sun";
    else if (code >= 1 && code <= 3) icon = "fa-cloud-sun";
    else if (code >= 45 && code <= 48) icon = "fa-smog";
    else if (code >= 51 && code <= 67) icon = "fa-cloud-rain";
    else if (code >= 71) icon = "fa-snowflake";

    let html =
      '<div style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem;"><i class="fa-solid ' +
      icon +
      '"></i> ' +
      temp +
      "°C in " +
      locationName +
      "</div>";
    html +=
      '<div style="display:flex; align-items:center; gap:0.6rem; font-size:0.75rem; font-weight:600; opacity:0.75; letter-spacing:0.02em;">';
    html +=
      "<span>Feels " +
      feelsLike +
      '°C</span>•<span><i class="fa-solid fa-wind"></i> ' +
      wind +
      ' km/h</span>•<span><i class="fa-solid fa-umbrella"></i> ' +
      rainChance +
      "%</span></div>";
    weatherDiv.innerHTML = html;
  } catch (error) {
    console.warn("Weather API unavailable, using estimates");
    // Fallback mock data
    const mockTemp = isDownSouth ? 14 : 18;
    let html =
      '<div style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem;"><i class="fa-solid ' +
      (isDownSouth ? "fa-cloud-sun" : "fa-sun") +
      '"></i> ~' +
      mockTemp +
      "°C in " +
      locationName +
      "</div>";
    html +=
      '<div style="display:flex; align-items:center; gap:0.6rem; font-size:0.75rem; font-weight:600; opacity:0.75; letter-spacing:0.02em;">';
    html +=
      "<span>Feels ~" +
      (mockTemp - 2) +
      '°C</span>•<span><i class="fa-solid fa-wind"></i> ~15 km/h</span>•<span><i class="fa-solid fa-umbrella"></i> 0%</span></div>';
    weatherDiv.innerHTML = html;
  }
}

// --- Setup Currency Widget ---

function setupCurrencyWidget() {
  const widget = document.getElementById("currencyWidget");
  const toggle = document.getElementById("currencyToggle");
  const closeBtn = document.getElementById("closeCurrency");
  const sgdInput = document.getElementById("sgdInput");
  const audInput = document.getElementById("audInput");
  const swapBtn = document.getElementById("swapBtn");
  const quickBtns = document.querySelectorAll(".quick-btn");

  if (!widget || !toggle || !sgdInput || !audInput) return;

  let currentRate = 0;
  let isReversed = false;

  // Toggle panel open/close
  toggle.addEventListener("click", function () {
    widget.classList.toggle("active");
    if (widget.classList.contains("active") && currentRate === 0) {
      fetchExchangeRate();
    }
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      widget.classList.remove("active");
    });
  }

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (!widget.contains(e.target)) {
      widget.classList.remove("active");
    }
  });

  // SGD input conversion
  sgdInput.addEventListener("input", function () {
    if (!isReversed) {
      audInput.value = ((parseFloat(this.value) || 0) * currentRate).toFixed(2);
    }
  });

  // Swap currencies button
  if (swapBtn) {
    swapBtn.addEventListener("click", function () {
      isReversed = !isReversed;
      const labels = document.querySelectorAll(".currency-input-group label");

      if (isReversed) {
        sgdInput.removeAttribute("readonly");
        audInput.removeAttribute("readonly");
        sgdInput.setAttribute("readonly", "true");

        if (labels.length > 1) {
          labels.textContent = "Australian Dollar (AUD)";
          labels.textContent = "Singapore Dollar (SGD)";
        }

        audInput.addEventListener("input", convertReverse);
      } else {
        audInput.setAttribute("readonly", "true");
        sgdInput.removeAttribute("readonly");

        if (labels.length > 1) {
          labels.textContent = "Singapore Dollar (SGD)";
          labels.textContent = "Australian Dollar (AUD)";
        }

        audInput.removeEventListener("input", convertReverse);
        sgdInput.dispatchEvent(new Event("input"));
      }
    });
  }

  function convertReverse() {
    sgdInput.value = ((parseFloat(audInput.value) || 0) / currentRate).toFixed(
      2
    );
  }

  // Quick amount buttons
  quickBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const amount = this.getAttribute("data-amount");
      if (isReversed) {
        audInput.value = amount;
        audInput.dispatchEvent(new Event("input"));
      } else {
        sgdInput.value = amount;
        sgdInput.dispatchEvent(new Event("input"));
      }
    });
  });

  // Fetch exchange rate from API
  function fetchExchangeRate() {
    const rateDisplay = document.getElementById("exchangeRate");
    const updatedDisplay = document.getElementById("lastUpdated");

    if (rateDisplay) rateDisplay.textContent = "Loading...";
    if (updatedDisplay) updatedDisplay.textContent = "Fetching rates...";

    fetch("https://api.exchangerate-api.com/v4/latest/SGD")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        currentRate = data.rates.AUD;
        if (rateDisplay) {
          rateDisplay.textContent =
            "1 SGD = " + currentRate.toFixed(4) + " AUD";
        }
        if (updatedDisplay) {
          updatedDisplay.textContent =
            "Updated at " +
            new Date().toLocaleTimeString("en-SG", {
              hour: "2-digit",
              minute: "2-digit",
            });
        }
        sgdInput.dispatchEvent(new Event("input"));
      })
      .catch(function (error) {
        console.warn("Currency API failed:", error);
        if (rateDisplay) rateDisplay.textContent = "Error loading rate";
        if (updatedDisplay) updatedDisplay.textContent = "Please try again";
      });
  }

  // Initial fetch and auto-refresh every 5 minutes
  fetchExchangeRate();
  setInterval(fetchExchangeRate, 300000);
}
// ===== PART 6: FAB MENU, MODALS & TRIP INFO =====

// --- Setup Floating Action Button (FAB) Menu ---

function setupFAB() {
  const fab = document.getElementById("fab");
  const fabBtn = document.getElementById("fabBtn");
  const jumpToday = document.getElementById("jumpToday");
  const shareBtn = document.getElementById("shareBtn");
  const emergencyBtn = document.getElementById("emergencyBtn");
  const emergencyModal = document.getElementById("emergencyModal");
  const closeEmergency = document.getElementById("closeEmergency");

  if (!fab || !fabBtn) return;

  // Toggle FAB menu
  fabBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    fab.classList.toggle("active");
  });

  // Jump to Today button
  if (jumpToday) {
    jumpToday.addEventListener("click", function () {
      const tripStart = new Date("2026-06-26");
      const now = new Date();
      const diff = now - tripStart;
      const daysDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));

      if (daysDiff >= 1 && daysDiff <= 11) {
        currentDay = daysDiff;
        showDay(daysDiff);
        createDayTabs(); // Refresh tabs to show active state
      } else {
        alert("Trip not active yet or already ended");
      }
      closeFAB();
    });
  }

  // Share button
  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      if (navigator.share) {
        navigator
          .share({
            title: "Perth Trip 2026",
            text: "Check out our Perth itinerary!",
            url: window.location.href,
          })
          .catch(function (error) {
            console.log("Share cancelled or failed:", error);
          });
      } else {
        // Fallback: Copy to clipboard
        navigator.clipboard
          .writeText(window.location.href)
          .then(function () {
            alert("Link copied to clipboard!");
          })
          .catch(function () {
            alert("Unable to share. Copy this URL: " + window.location.href);
          });
      }
      closeFAB();
    });
  }

  // Emergency info button
  if (emergencyBtn && emergencyModal) {
    emergencyBtn.addEventListener("click", function () {
      emergencyModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent body scroll
      closeFAB();
    });
  }

  // Close emergency modal
  if (closeEmergency && emergencyModal) {
    closeEmergency.addEventListener("click", function () {
      emergencyModal.classList.remove("active");
      document.body.style.overflow = ""; // Restore body scroll
    });
  }

  // Close modal on backdrop click
  if (emergencyModal) {
    emergencyModal.addEventListener("click", function (e) {
      if (e.target === emergencyModal) {
        emergencyModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // Close FAB when clicking outside
  document.addEventListener("click", function (e) {
    if (fab && !fab.contains(e.target)) {
      closeFAB();
    }
  });

  // Close modal with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (emergencyModal && emergencyModal.classList.contains("active")) {
        emergencyModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
}

// --- Close FAB Menu ---

function closeFAB() {
  const fab = document.getElementById("fab");
  if (fab) fab.classList.remove("active");
}

// --- Setup Trip Info Modal ---

function setupTripInfo() {
  const btn = document.getElementById("tripInfoBtn");
  const modal = document.getElementById("tripInfoModal");
  const closeBtn = document.getElementById("closeTripInfo");

  if (!btn || !modal) return;

  // Open trip info modal
  btn.addEventListener("click", function () {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent body scroll
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Close on backdrop click
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Close with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (modal.classList.contains("active")) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
}

// --- Initialize App on Page Load ---

window.addEventListener("load", init);
// ===== OPTIMIZED SCROLL DETECTION FOR TOUCH =====

let lastScrollTop = 0;
let ticking = false;
let scrollThrottle;

function updateScrollState() {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Increased threshold for touch to prevent accidental triggers
  if (currentScroll <= 80) {
    document.body.classList.add("at-top");
    document.body.classList.remove("scrolling-down", "scrolling-up");
  } else if (currentScroll > lastScrollTop + 10 && currentScroll > 200) {
    document.body.classList.add("scrolling-down");
    document.body.classList.remove("scrolling-up", "at-top");
  } else if (currentScroll < lastScrollTop - 10) {
    document.body.classList.add("scrolling-up");
    document.body.classList.remove("scrolling-down", "at-top");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  ticking = false;
}

window.addEventListener(
  "scroll",
  function () {
    if (!ticking) {
      // Use RAF for smooth 60fps updates
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  },
  { passive: true }
); // Passive listener for better scroll performance

document.body.classList.add("at-top");

// ===== SCROLL TO TOP BUTTON =====

(function setupScrollToTop() {
  const scrollBtn = document.getElementById("scrollToTop");
  if (!scrollBtn) return;

  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 500) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  // Smooth scroll to top when clicked
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
})();
// ===== SCROLL TO TOP BUTTON =====

(function setupScrollToTop() {
  const scrollBtn = document.getElementById("scrollToTop");
  if (!scrollBtn) return;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 500) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
})();

// ===== PWA INSTALL PROMPT =====

let deferredPrompt;

window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  deferredPrompt = e;

  const installPrompt = document.getElementById("installPrompt");
  const installBtn = document.getElementById("installBtn");
  const closeBtn = document.getElementById("closeInstall");

  if (!installPrompt) return;

  setTimeout(function () {
    installPrompt.classList.add("show");
  }, 5000);

  if (installBtn) {
    installBtn.addEventListener("click", function () {
      installPrompt.classList.remove("show");
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          console.log("✅ App installed!");
        }
        deferredPrompt = null;
      });
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      installPrompt.classList.remove("show");
    });
  }
});
// ===== TOUCH-OPTIMIZED BUTTON FEEDBACK =====

(function optimizeTouchButtons() {
  if (!document.documentElement.classList.contains("touch-device")) return;

  // Add instant visual feedback to all clickable elements
  const touchTargets = document.querySelectorAll(
    "button, .tab, .map-link, .activity, .search-result-item"
  );

  touchTargets.forEach(function (element) {
    element.addEventListener(
      "touchstart",
      function () {
        this.style.opacity = "0.7";
      },
      { passive: true }
    );

    element.addEventListener(
      "touchend",
      function () {
        this.style.opacity = "1";
      },
      { passive: true }
    );

    element.addEventListener(
      "touchcancel",
      function () {
        this.style.opacity = "1";
      },
      { passive: true }
    );
  });
})();

// Run after DOM loads
window.addEventListener("load", optimizeTouchButtons);

window.addEventListener("appinstalled", function () {
  console.log("🎉 Perth Trip 2026 installed successfully!");
});
