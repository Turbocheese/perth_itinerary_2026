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
        tip: "5-hour flight. Perfect time to download offline Google Maps for Western Australia.",
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
        tip: "Take turns resting. The driver should stay highly alert for wildlife at this hour.",
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
        tip: "Highways are dark. Kangaroos are drawn to headlights, so don't speed!",
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
        tip: "Guided tours only. It stays a constant 17°C inside, which might actually feel warm compared to outside!",
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
        desc: "Dinner at Swings & Roundabouts (Table for 5)",
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
        address:
          "Augusta Margaret River Catholic Parish, Corner Wallcliffe Rd & Farrelly St",
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
        desc: "Vintage shopping: Beanhead Records, LucyKat, Poolroom Vintage, The Tiny Store, Flying Wardrobe, Lime Beach",
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
        tip: "This is an audio-guided tour, allowing you to go completely at your own pace.",
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
        desc: "Gabriel Chocolate, Margaret River Chocolate Factory, Wulura Olive Oil",
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
        desc: "Dunsborough: Lions Shed, Cape Emporium, Dunsborough Books",
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
        desc: "Shop Cowaramup: Mukau Giftware, Candy Cow, Temper Temper Chocolate",
        address: "69 Bussell Hwy, Cowaramup WA 6284",
        tag: "activity",
        duration: "1 hour",
        tip: "Known locally as 'Cow Town'. Keep an eye out for the 42 life-sized fiberglass cow statues.",
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
        tip: "$5 entry fee. It's a brisk 25-minute walk each way—a great way to walk off lunch!",
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
        tip: "Beautiful rustic setting. Look for unique Australiana pieces.",
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
        desc: "Explore: Mills Records, High Street Mall, Elizabeth's Bookshop",
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
        desc: "Shopping: Common Ground, Ginger Pudding Vintage, Bill Campbell Books",
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
        tip: "Winter is prime strawberry season in WA—expect them to be massive, ruby red, and super sweet.",
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
        tip: "One of Perth's premier shopping centers. The recent multi-million dollar expansion is beautiful.",
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
        tip: "Have a safe flight! Don't forget to submit your SG Arrival Card before landing.",
      },
    ],
  },
];

let currentDay = 1;
let allActivities = [];

function init() {
  loadTheme();
  createDayTabs();
  showDay(1);
  startCountdown();
  setupSearch();
  setupFAB();
  setupThemeToggle();
  setupCurrencyWidget();
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";

  themeToggle.innerHTML =
    currentTheme === "dark"
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';

  themeToggle.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    themeToggle.innerHTML =
      newTheme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  });
}

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

function showDay(dayNum) {
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

  const dayData = tripData.find(function (d) {
    return d.day === dayNum;
  });
  if (!dayData) return;

  // Header Elements
  if (document.getElementById("currentDate"))
    document.getElementById("currentDate").textContent = dayData.date;
  if (document.getElementById("currentTitle"))
    document.getElementById("currentTitle").textContent = dayData.title;

  // Daily Insight / Fact
  if (document.getElementById("insightText"))
    document.getElementById("insightText").textContent = dayData.fact;
  if (document.getElementById("insightIcon"))
    document.getElementById("insightIcon").innerHTML =
      '<i class="fa-solid ' + dayData.icon + '"></i>';

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
          (activity.tip || "")
        ).toLowerCase(),
      });
    });
  }

  // Trigger New Features
  fetchWeather(dayNum);
  setTimeout(updateProgress, 100);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function createActivityCard(activity, activityId) {
  const card = document.createElement("div");
  card.className = "activity";

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

  let html = '<div class="activity-header">';
  html += '<div class="time">' + activity.time + "</div>";
  html += '<div style="display: flex; align-items: center; gap: 0.75rem;">';
  html +=
    '<input type="checkbox" class="activity-checkbox" id="' +
    activityId +
    '" ' +
    (isChecked ? "checked" : "") +
    " />";
  html += '<div class="tag ' + tagClass + '">' + tagLabel + "</div>";
  html += "</div></div>";
  html += '<div class="desc">' + activity.desc + "</div>";

  if (activity.duration) {
    html +=
      '<div class="duration"><i class="fa-regular fa-clock"></i> ' +
      activity.duration +
      "</div>";
  }

  if (activity.tip) {
    html +=
      '<div class="tip"><i class="fa-solid fa-lightbulb"></i> ' +
      activity.tip +
      "</div>";
  }

  if (activity.address) {
    const mapUrl =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(activity.address);
    html +=
      '<a href="' +
      mapUrl +
      '" target="_blank" rel="noopener" class="map-link"><i class="fa-solid fa-location-dot"></i> Open Map</a>';
  }

  card.innerHTML = html;

  const checkbox = card.querySelector(".activity-checkbox");
  if (checkbox) {
    checkbox.addEventListener("change", function () {
      saveCheckboxState(activityId, this.checked);
      if (this.checked) {
        card.style.opacity = "0.6";
        card.style.textDecoration = "line-through";
      } else {
        card.style.opacity = "1";
        card.style.textDecoration = "none";
      }
      updateProgress();
    });
  }

  if (isChecked) {
    card.style.opacity = "0.6";
    card.style.textDecoration = "line-through";
  }

  return card;
}

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

function startCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;
  const tripStart = new Date("June 26, 2026 09:00:00").getTime();

  function update() {
    const now = new Date().getTime();
    const diff = tripStart - now;

    if (diff < 0) {
      countdown.innerHTML = '<i class="fa-solid fa-plane"></i> Trip Started!';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.innerHTML =
      '<i class="fa-solid fa-calendar"></i> ' + days + " days until departure";
  }

  update();
  setInterval(update, 60000);
}

function setupSearch() {
  const searchBox = document.getElementById("searchBox");
  const searchInfo = document.getElementById("searchInfo");
  if (!searchBox || !searchInfo) return;
  let searchTimer;

  searchBox.addEventListener("input", function (e) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      const query = e.target.value.toLowerCase().trim();

      if (query === "") {
        allActivities.forEach(function (item) {
          item.element.style.display = "block";
          const desc = item.element.querySelector(".desc");
          desc.innerHTML = desc.innerHTML.replace(
            /<mark class="highlight">|<\/mark>/g,
            ""
          );
        });
        searchInfo.textContent = "";
        return;
      }

      let found = 0;
      allActivities.forEach(function (item) {
        if (item.text.includes(query)) {
          item.element.style.display = "block";
          found++;
          const desc = item.element.querySelector(".desc");
          let html = desc.innerHTML;
          html = html.replace(/<mark class="highlight">|<\/mark>/g, "");
          const regex = new RegExp("(" + query + ")", "gi");
          html = html.replace(regex, '<mark class="highlight">$1</mark>');
          desc.innerHTML = html;
        } else {
          item.element.style.display = "none";
        }
      });
      searchInfo.textContent = found + " result" + (found !== 1 ? "s" : "");
    }, 300);
  });
}

function setupFAB() {
  const fab = document.getElementById("fab");
  const fabBtn = document.getElementById("fabBtn");
  const jumpToday = document.getElementById("jumpToday");
  const shareBtn = document.getElementById("shareBtn");

  if (!fab || !fabBtn || !jumpToday || !shareBtn) return;

  fabBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    fab.classList.toggle("active");
    const icon = fabBtn.querySelector("i");
    if (icon) {
      icon.className = fab.classList.contains("active")
        ? "fa-solid fa-xmark"
        : "fa-solid fa-ellipsis";
    }
  });

  jumpToday.addEventListener("click", function () {
    const today = new Date();
    const tripStart = new Date("2026-06-26");
    const diff = today - tripStart;
    const daysDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (daysDiff >= 1 && daysDiff <= 11) {
      currentDay = daysDiff;
      showDay(daysDiff);
      createDayTabs();
    } else {
      alert("Trip not active yet or already ended");
    }
    closeFAB();
  });

  shareBtn.addEventListener("click", function () {
    if (navigator.share) {
      navigator
        .share({
          title: "Perth Trip 2026",
          text: "Check out our Perth itinerary",
          url: window.location.href,
        })
        .catch(function () {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
    closeFAB();
  });

  document.addEventListener("click", function (e) {
    if (fab && !fab.contains(e.target)) closeFAB();
  });
}

function closeFAB() {
  const fab = document.getElementById("fab");
  const fabBtn = document.getElementById("fabBtn");
  if (fab) fab.classList.remove("active");
  if (fabBtn) {
    const icon = fabBtn.querySelector("i");
    if (icon) icon.className = "fa-solid fa-ellipsis";
  }
}

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

  toggle.addEventListener("click", function () {
    widget.classList.toggle("active");
    if (widget.classList.contains("active") && currentRate === 0)
      fetchExchangeRate();
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      widget.classList.remove("active");
    });
  }

  document.addEventListener("click", function (e) {
    if (!widget.contains(e.target)) widget.classList.remove("active");
  });

  sgdInput.addEventListener("input", function () {
    if (!isReversed) {
      const sgd = parseFloat(this.value) || 0;
      audInput.value = (sgd * currentRate).toFixed(2);
    }
  });

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
    const aud = parseFloat(audInput.value) || 0;
    sgdInput.value = (aud / currentRate).toFixed(2);
  }

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
        if (rateDisplay)
          rateDisplay.textContent =
            "1 SGD = " + currentRate.toFixed(4) + " AUD";
        if (updatedDisplay) {
          const now = new Date();
          updatedDisplay.textContent =
            "Updated at " +
            now.toLocaleTimeString("en-SG", {
              hour: "2-digit",
              minute: "2-digit",
            });
        }
        sgdInput.dispatchEvent(new Event("input"));
      })
      .catch(function (error) {
        if (rateDisplay) rateDisplay.textContent = "Error loading rate";
        if (updatedDisplay) updatedDisplay.textContent = "Please try again";
      });
  }

  fetchExchangeRate();
  setInterval(fetchExchangeRate, 300000);
}

// NEW FUNCTION: Live Weather (With graceful fallback)
async function fetchWeather(dayNum) {
  const weatherDiv = document.getElementById("liveWeather");
  if (!weatherDiv) return;
  weatherDiv.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';

  const isDownSouth = dayNum <= 5;
  const lat = isDownSouth ? -33.955 : -31.9505;
  const lon = isDownSouth ? 115.075 : 115.8605;
  const locationName = isDownSouth ? "Margaret River" : "Perth";

  try {
    const response = await fetch(
      `[https://api.open-meteo.com/v1/forecast?latitude=](https://api.open-meteo.com/v1/forecast?latitude=)\${lat}&longitude=\${lon}&current_weather=true`
    );
    if (!response.ok) throw new Error("API blocked or unavailable");
    const data = await response.json();
    const temp = Math.round(data.current_weather.temperature);
    const code = data.current_weather.weathercode;

    let icon = "fa-cloud";
    if (code === 0) icon = "fa-sun";
    else if (code >= 1 && code <= 3) icon = "fa-cloud-sun";
    else if (code >= 45 && code <= 48) icon = "fa-smog";
    else if (code >= 51 && code <= 67) icon = "fa-cloud-rain";
    else if (code >= 71) icon = "fa-snowflake";

    weatherDiv.innerHTML = `<i class="fa-solid \${icon}"></i> \${temp}°C in \${locationName}`;
  } catch (error) {
    // If the browser blocks the API, show the historical Winter Average instead of an error!
    const fallbackTemp = isDownSouth ? "15" : "18";
    weatherDiv.innerHTML = `<i class="fa-solid fa-cloud-sun"></i> ~\${fallbackTemp}°C (Winter Avg)`;
  }
}

// NEW FUNCTION: Progress Tracker
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

window.addEventListener("load", init);
