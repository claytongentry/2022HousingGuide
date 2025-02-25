const dorms = [
  {
    name: "Allison Hall",
    address: "1820 Chicago Ave",
    size: "363",
    type: "Hall",
    location: "South",
    dining: "yes",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    prices: "Double: 10,581",
    link: "https://www.northwestern.edu/living/residential-experience/housing-options/res-halls/allison.html",
    description: `Allison is one of two South Campus dorms with a dining hall 
    in it (Plex is the other). If you lose your keys, you won't have to go far because 
    the South Area Desk is located in Allison. Rooms are known for being spacious and carpeted. It's
     in close proximity to the study spaces in Shepard, the 1838 gym and the sorority quad. No one
      actually calls it Hotel Allison, but some people say it's called that.
    <br><br>
    Allison offers all-gender housing on the first floor that students 
    must opt into. Students can select either singles or doubles. The community bathrooms are labeled all-gender on that floor.
    `,
    testimonial: `
    "The room is big, it's a great location and it's so convenient to live on top of a dining hall."<br>
    - Class of 2025
    <br><br>
    "I have met most people at Allison outside of Allison. Lots of people come to hang out in the first floor lounge. Allison is definitely less social than other dorms. I would maybe prefer to live North Campus like in Elder just so I could get to classes at Tech faster."
    <br>- Class of 2025
    <br><br>
    "The vibe in Allison is very chill. I like how it's clean and new. The dining hall is also very accessible. The only thing I dislike about Allison is that there's not enough lighting and ventilation."
    <br>- Class of 2024
    <br><br>
    "The dorm isn't too old so it's still pretty clean. I didn't have a choice to live anywhere else. Allison is pretty good. I like how it's super close to the dining hall so you can always get food in your pajamas. However, I wish there could be better lighting."
    <br>- Class of 2024
    <br><br>
    "It's super quiet. You don't really get to know the people in Allison. But the dorms are super nice, and the bathrooms are cool, and the dining hall is downstairs, so the amenities make up for the lack of social life. Also love having laundry on the same floor. But the dorm is quiet and probably isn't the place to make a lot of friends. I'm not sure if I would change because the dorm is really nice, but I would like to live somewhere more social."
    <br>- Class of 2024
    <br><br>
    "I like how it's right on top of a dining hall and close to all my classes on South Campus. Even if my classes are at Bienen or Swift Hall, they are still very walkable from Allison. I wish my room could be bigger and closer to the laundry room and the elevator."
    <br>- Class of 2024
    `,
    images: [ 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3333.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3320.png", caption: "Laundry room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3321.png", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3322.png", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3324.png", caption: "Study room"},
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3319.png", caption: "Common room"},],

    tech: "0.7 mi / 1.13 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    allgender: "yes",
    latitude: 42.0504413,
    longitude: -87.6782071,
  },
  {
    name: "Ayers Hall",
    address: "2324 Campus Dr",
    size: "170",
    type: "College",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,663; Double: 10,581",

    tech: "0.3 mi / 0.48 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    description: `Ayers Hall houses the Residential College of Commerce and Industry, although everyone 
    just calls it Ayers. You can network with other economics and business majors in Ayers if that's 
    your thing. Students have said the inside of the building looks like a submarine. There are lots 
    of common spaces to hang out or study. You can play foosball, ping pong or pool on the first floor. 
    It also has an elevator.
    `,
    testimonial:  `
    "Ayers is friendly, quiet, calm, nice. I like that it's chill, they give us food on Sundays (res college superiority). I don't like the washers or the halls that look like prisons. The bathrooms are fine. I like living in Ayers. The dorms are big, and I have a lot of friends there." 
    <br>
    - Class of 2025
    <br><br>
    "I think my dorm is chill, quiet and friendly. I like the size of the rooms, the number of people in my dorm and the free stuff. I dislike the facilities like the bathrooms, broken washing machines and old kitchen. I wouldn't change my decision, I like my dorm a lot."
    <br>
    - Class of 2025
    <br><br>
    "I would say that Ayers is very friendly and calm. I like that we have very spacious rooms, which is something that is rare for North Campus. It is also nice that we have basic amenities like an elevator and air conditioning. One complaint I have is that laundry can be very frustrating, and the walls are a bit thin, but that's no problem if you invest in some good earplugs for sleepy time. I would not want to live anywhere else. I will admit that I have fallen in love with Ayers despite its minor flaws."
    <br>- Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/ayers5.jpg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/ayers6.jpg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/ayers2.jpg", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/ayers1.jpg", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/ayers3.jpg", caption: "Common room"},
    ],

    allgender: "no",
    latitude: 42.0604281,
    longitude: -87.6751294,
  },
  {
    name: "Bobb-McCulloch Hall",
    address: "2305 Sheridan Rd",
    size: "496",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "no",
    doubles: "yes",
    triples: "yes",
    prices: "Double: 9,960",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    description: `Bobb has a bit of a reputation as a grody but fun party dorm.
     It used to be a free-standing building, until McCulloch was attached to it. 
     It may not be the best place to study on a weekend evening, but people are known 
     for having a good time there. It's steps away from Lisa's and Tech, with basketball courts in the back.
    <br><br>
    Famous alum: George R. R. Martin lived in Bobb!
    `,
    testimonial: `
    "Bobb is pretty social. The bathrooms are the worst but I have made a ton of friends on my floor. I wouldn't have wanted to live anywhere else."
    <br> - Class of 2025
    <br><br>
    "Bobb is social, fun, lively, lowkey dirty but nice rooms. It has bad bathrooms but nice people. It gets loud at night, especially on weekends. If I had to do it over I would live in Bobb again." 
    <br>- Class of 2025
    <br><br>
    "It's loud, social but in a cliquey way, very much for the stereotypical north person. I like the location near dining halls, the library and SPAC, dislike the people. I would rather live somewhere else." 
    <br>- Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Double---Teresa-Nowakowski.jpg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/67245400514__A0F51EF6-54B4-48F7-8640-5DD1644D4791.jpeg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/67245406282__D11FACBF-F54C-4B41-8509-659C9BD6F087.jpeg", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/67245407460__01731FB1-861D-43A6-894E-16F85CCBF05C.jpeg", caption: "Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/67245408805__C72BB6C1-802F-4356-866D-CA5C40D1C69C.jpeg", caption: "Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Laundry_Kitchen---Teresa-Nowakowski.jpg", caption: "Laundry room"},],
    allgender: "no",
    latitude: 42.0596659,
    longitude: -87.6757728,
  },
  {
    name: "Chapin Hall",
    address: "726 University Pl",
    size: "72",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.7 mi / 1.13 km",
    norris: "0.5 mi / 0.8 km",
    rock: "0.3 mi / 0.48",
    description: `
    Chapin is a humanities-themed residential college located in the southwest corner of campus. All the rooms are doubles. It's
     the oldest campus residence, and is known for its unique historic architecture and large rooms. It has a kitchen, pool table
      and study spaces on the ground floor. Although Chapin houses the humanities residential college, students from all majors can and do live in Chapin.
    <br><br>
   Note: Chapin offers all-gender housing. Ten students who opt in are assigned an all-gender double. They will share one community-style all-gender bathroom.
    `,
    testimonial:`
    "We have the largest doubles on campus, which allows for spacious living, and even the bathrooms are very big and clean. One drawback is that it's pretty far from some classes because it's at the southwest corner of campus, especially in winter quarter. If you engage with the community it's really nice, and it's across from Willard, where you can be part of the southwest area community."
    <br> - Class of 2025
    <br><br>
    "I would describe the vibe as quaint, cute, quirky, quiet. The building definitely has character. I love the ceilings. Likes: rooms are big and bathrooms are nice, close to downtown. Dislikes: generally antisocial, no AC, as far from classes as you can live. I think Chapin is generally underrated. There are definitely better dorms on campus, but it's nice."
    <br> - Class of 2025
    <br><br>
    "I would maybe describe Chapin as a little bit nerdy. It's an eclectic mix of students: musical-minded, writers, STEM majors, you name it. I love the fancy plaster ceilings, the plentitude of sofas in the lounges, the spacious rooms, the clean bathrooms and all the free-food events. I don't like the fact that the first floor washer and dryer have been broken for several quarters now and the fact that people don't know how to keep the kitchen looking decent."
    <br>- Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6025.jpg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6027.jpg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6028.jpg", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6029.jpg", caption: "Kitchen"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6030.jpg", caption: "Study room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6031.jpg", caption: "Study room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6035.jpg", caption: "Laundry room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6024.jpg", caption: "Entryway"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6032.jpg", caption: "Staircase"},
    ],

    allgender: "yes",
    latitude: 42.0510376,
    longitude: -87.6812987,
  },
  {
    name: "East Fairchild (CRC)",
    address: "1855 Sheridan Rd",
    size: "109",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.2 mi / 0.32 km",
    rock: "0.1 mi / 0.16 km",
    description: `East Fairchild is more commonly known as CRC, for the Communications Residential College 
    that it houses. CRC draws lots of Medill and School of Communication students who are interested in the 
    thematic events and community of CRC. Perks include two screening rooms: the tiny screening room (TSR) and
     big screening room (BSR). The building has fun traditions and regularly organizes social activities including 
     munchies and talks with faculty members. The amenities are a little outdated, and the rooms are on the smaller
      side. There are four lounges on every floor where people gather to study or hang out. The basement of CRC 
      has a study room, music practice room and a studio where CRC holds their annual Radiothon - 50 straight 
      hours of broadcasting to benefit the American Heart Association. East and West Fairchild together are 
      often referred to as the “Fairchildren.”
    `,
    testimonial: `
    "It's a smaller dorm and the rooms are smaller, but it is a really great community, and I have made a lot of good friends on my floor. Only bad thing is that there's no elevator, so if you live on the second or third floor that can be annoying."
    <br><br>
    "I like the location - East Fairchild is super close to Norris, Main Library and a lot of the South Campus buildings where people have their classes. The rooms and the facilities are not the best, and not having an elevator isn't great, but overall it is a fine dorm."
    <br><br>
    "I would say the vibe of CRC is quirky core because there are a lot of little random things, like the bright red bathroom stalls and the movie theater off the main lounge that make it super unique. The small rooms are definitely not it, but there are a lot of welcome surprises within CRC that I didn't know when I was choosing housing, and they make it worth it!"
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7065.JPG", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0244.jpg", caption: "Lounge"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0247.jpg", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0250.JPG", caption: "Single room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0252.JPG", caption: "Single room"}, 
    ],
    allgender: "no",
    latitude: 42.0508277,
    longitude: -87.6751223,
  },
  {
    name: "Elder Hall",
    address: "2400 Sheridan Rd",
    size: "345",
    type: "Hall",
    location: "North",
    dining: "yes",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.3 mi / 0.48 km",
    norris: "0.7 mi / 1.13 km",
    rock: "0.7 mi / 1.13 km",
    description: `Elder is one of two North Campus residences with a dining hall in it (Sargent is the other). 
    Located on the other side of Sheridan Road from the fraternity quad, it's a short walk from other North 
    Campus residences and SPAC. One of its main perks is a dining hall in the lower level of the dorm. The 
    dining hall is weirdly lit and reminiscent of a T.G.I. Friday's (on a Thursday night). It's known for being fun but not the nicest dorm.
    <br><br>
    Elder also offers all-gender housing in a specific wing of the building. Community bathrooms in 
    that wing are marked as all-gender. Residents of this wing must opt into all-gender housing.
    <br><br>
    Accessibility note: Elder has ADA accessible rooms and an elevator. While Elder has a lift 
    that takes students who use wheelchairs to the dining hall, it has had malfunction issues 
    with the doors and has not always been fixed in a timely manner.
    <br><br>
    Famous alum: Rumor has it, Maude Apatow lived in Elder!
    `,
    testimonial: `
    "Elder is just ok. Having a dining hall under is very convenient. Rooms are not bad, relatively spacious. Bathrooms and facilities are not great and have a lot of plumbing issues/water leaks/no hot water days. I would choose somewhere else to live."
    <br> - Class of 2024.
    <br><br>
    "There is an absurd amount of noise early in the morning and sometimes even late at night in the back parking lot. Whether it's garbage trucks, food delivery trucks or construction, it's all uncalled for and highly inconsiderate. This is a huge issue, making it difficult to get enough/proper sleep. Wouldn't live here again."
    <br> - Class of 2024
    <br><br>
    "I like having a dining hall so close to my room, but the layout of Elder is not great. The laundry is very far, and I can hear both the cars on the road and the hand dryers in the bathroom from my room, so it can be pretty loud at times. Overall, the rooms and bathrooms are pretty decent though, and the location is close to SPAC and Tech, so I would still choose to live here."
    <br> - Class of 2024
    <br><br>
    "Elder is definitely very social. I've made so many friends here as a freshman. The bathrooms are pretty old, and the second floor L wing has coed bathrooms, so just be aware of that. The rooms are also fairly small, probably some of the smallest doubles on campus but fine if you get along with your roommate."
    <br> - Class of 2025
    <br><br>
    "Elder is great vibes. You meet a lot of people, so it's a good first-year dorm. The rooms are way better if you loft your bed. The bathrooms aren't great, but you get used to it. I wouldn't mind living there again next year. I would highly recommend it over Lincoln for first years because you'll make more friends in Elder, but for second years I'd recommend Lincoln. If I had known this I would've ranked Elder first instead of second last year, but it's always been ranked high for me."
    <br>- Class of 2025
    <br><br>
    "Elder is pretty fun, and it's super easy to make friends here. The bathrooms suck though, and the furniture is dark wood, so it sometimes brings the vibe/light of the room down. If I could do it again I would get a suite just for the private bathroom."
    <br>- Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/AD2FD0E7-810F-4A42-880C-3B53367588F3.jpeg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-lounge.jpeg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-kitchen.jpeg", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-ground-floor--lounge.jpeg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-floor-lounge.jpeg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-floor-kitchen.jpeg", caption: "Kitchen"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-exterior--5-.jpeg", caption: "Exterior"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-exterior--3-.jpeg", caption: "Exterior"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-exterior--2-.jpeg", caption: "Exterior"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-dining-hall.jpeg", caption: "Dining hall"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-dining-hall-3.jpeg", caption: "Dining hall"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-bathroom--3-.jpeg", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/elder-bathroom--2-.jpeg", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/C3FBB527-C7A6-4C67-BC55-18243947460F.jpeg", caption: "Bathroom"},


    ],

    allgender: "yes",
    latitude: 42.0611101,
    longitude: -87.6778,
  },
  {
    name: "Foster-Walker Complex/Plex",
    address: "1927 Orrington Avenue",
    size: "582",
    type: "Hall",
    location: "South",
    dining: "yes",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "no",
    triples: "no",
    prices: "Single: 12, 633",

    tech: "0.5 mi / 0.8 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    description: `Plex is a ton of singles arrayed in kind of a maze-like style. 
    Plex used to be limited to second-year students and up, but now it's open to freshmen. 
    Because of that, Plex's formerly isolated reputation has shifted. One of its perks is a dining 
    hall on the ground floor divided into Plex West (which stays open until 10 pm) and Plex East (known 
    for its stir fry). It's close to the Blomquist gym. The main South Campus mailroom is conveniently 
    located in the basement of Plex.
    <br><br>
    Plex offers all-gender housing, though it is not located in a specific area of the dorm due to the 
    dorm being entirely singles. According to res services, normally, four students share a single-person 
    occupancy bathroom, which is more private than community-style bathrooms.
    `,
    testimonial: `
    "The vibe depends on which floor you're on. Some floors are very outgoing, and they get to know each other a lot, and they'll be loud at night, but in a good way. Some floors are very keep to yourself, quiet, everybody does their own thing. There's something about the roommate experience that you miss out on, for sure, but I think there are a lot of other aspects that make up for it, especially the fact that the whole building is singles. You get to know people, nobody's like hiding in their room, away from everyone else. You have the food and the convenience store and the laundry, which is very convenient. My least favorite part about living here would be that the walls are very thin. It's in the perfect spot on campus, because it's South Campus, which is by most of the classes, but it's the northernmost part of South Campus, so it's still not far from any of the north buildings. If you have a hard time making friends, though, I might not recommend it."
    <br>- Class of 2025
    <br><br>
    "It's pretty lowkey, pretty chill. Not too much goes on in Plex. I think if you're a relatively social person in the first place, living in Plex isn't that bad of a decision for making friends, because you meet people in all sorts of places, and it's nice to be able to come back to your own room, and not have a roommate. The walls are super thin, which isn't great, and the bathrooms aren't super nice, but they do the job."
    <br> - Class of 2025
    <br><br>
    "It's very chill, it's very friendly. I would say most of the friends I have come from Plex. It's the Plex ecosystem. I think there's a stigma because of Plex being kind of an isolation dorm because of Covid and because it's all singles, but I actually found it very easy to make friends because no one had that instant roommate connection, so everyone was always out in the hallways."
    <br> - Class of 2025
    <br><br>
    "Honestly, I was a bit hesitant when I first moved in because it's just a dorm full of singles, and everyone called it the prison dorm or the quarantine dorms, but after moving in I realized that my floor has a cute little community. My least favorite thing is how thin the walls are, because I'm kind of loud, and I feel bad especially because of my loud friends. I love that the dining hall and package center are right downstairs. It's kind of in the middle of campus, so it's not too far from either end, and it's closer to downtown when I have to do things there. My favorite thing is having a single dorm that's pretty cute. We have brick walls and windows that don't have bars on them, which is pretty cool."
    <br> - Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0488.jpg", caption: "Single room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0486.jpg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0487.jpg", caption: "Hall"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0491.jpg", caption: "Laundry room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0492.jpg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0493.jpg", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0494.jpg", caption: "Plex"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0485.jpg", caption: "Common room"}, 
    ],

    allgender: "yes",
    latitude: 42.0529164,
    longitude: -87.6786691,
  },
  {
    name: "Goodrich House",
    address: "2321 Sheridan Rd",
    size: "34",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "no",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    description: `Although Goodrich is close to North Campus dining halls, 
    you also have a kitchen on the first floor, plus Goodrich directly across 
    from Lisa's. It's also one of the oldest dorms on campus. It has an accessible lift
     and lounge areas on the first floor.
    `,
    testimonial: `"It's pretty calm and quiet. I like that it's peaceful, and the people are nice. It would be nice if there were more bonding, though. It's not very social. I can't really hear parties or things like that going on around here. The walk south can be tedious."
    <br>- Class of 2024    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6050.jpg", caption: "Kitchen"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6052.jpg", caption: "Kitchen"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6051.jpg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6053.jpg", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6054.jpg", caption: "Hall"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6055.jpg", caption: "Accessible Lift"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6056.jpg", caption: "Laundry room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6049.jpg", caption: "Common room"}, 
 ],

    allgender: "no",
    latitude: 42.0599659,
    longitude: -87.6764206,
  },
  {
    name: "Hobart House",
    address: "630 Emerson St",
    size: "50",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.4 mi / 1.32 km",
    description: `Hobart is Northwestern's women's residential college. It's located in the sorority quad, 
    right next to the Mid-Quads and Searle Health Center. It's a rule that you have to yell "MAN ON THE FLOOR!"
    if a guy comes over, although it's more common that people will put it in the group chat now. Hobart is known for having a welcoming vibe.
    `,
    testimonial: `
    "I've heard a lot of people describe Hobart as cottagecore. Generally it's very cozy and homey! There are some issues with people leaving dishes all over the sink and wildly inconsistent room sizes though. If I had the chance to do it over again, I would still live in Hobart. I love it."
    <br> - Class of 2024
    <br><br>
    "The vibe of the dorm is very home-y! Hobart creates a great sense of community and friends within the dorm. I love the amenities of the dorm. We have a kitchen, library, lounge area and basement filled with other rooms like our computer lab and exercise area. I don't dislike anything about the dorm, really. I would live in Hobart again, but the only reason I'm moving out is so I can have a single room next year. Hobart has singles, but they were all chosen before I was able to select one."
    <br>- Class of 2025
    <br><br>
    "The vibe is cottagecore or cozy and close-knit, friendly. It's an older building, and you can tell, but it also offers a lot of charm in the architecture and stuff! The laundry is in the basement, and laundry maintenance is not great, and the carpeting should be replaced, but there are so many spaces to be social and have guests. There's a general con of community living in terms of kitchens and bathrooms, but it's only slightly better in suite-style living. A smaller dorm is less daunting because it's not like total strangers in the bathroom. If I were to select dorms again maybe I would want something closer to my classes, but even then I would be a non-res at Hobart because the community is so nice and welcoming."
    <br>- Class of 2024
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_8787---Maria-Caamano-Garcia.jpg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7043.JPEG", caption: "Triple room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7003.JPEG", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7005.JPEG", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7011.JPEG", caption: "Laundry room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7017.JPEG", caption: "Kitchen"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7022.JPEG", caption: "Gym"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_8710-2---Maria-Caamano-Garcia.jpg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_8713-2---Maria-Caamano-Garcia.jpg", caption: "Kitchen"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_8715-2---Maria-Caamano-Garcia.jpg", caption: "Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_8716-2---Maria-Caamano-Garcia.jpg", caption: "Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_8717-2---Maria-Caamano-Garcia.jpg", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_6998-1.JPEG", caption: "Common room"},
    ],

    allgender: "no",
    latitude: 42.0517682,
    longitude: -87.6788937,
  },
  {
    name: "Jones Hall",
    address: "1820 Sheridan Rd",
    size: "121",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.8 mi / 1.29 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    description: `Jones is as far south as you can go, just across 
    Sheridan Road from the Fairchildren. A bit of lore: the dorm was not 
    meant to be used for the 2019-20 school year, but then they allegedly 
    overfilled the class and had to open it up, greatly confusing the people who 
    were placed there. It used to be a theater/performing residential college, 
    but now it's just a regular residential college. You can still find theater 
    majors and other humanities students living there who want to be close to classes 
    and downtown Evanston. It's been used ever since. It's next to what is currently 
    "Hotel Hinman," or quarantine for on-campus students who test positive for COVID.
    `,
    testimonial: `
    "The Jones community is great. The people are so nice and easy to get to know. The rooms are small, but there are two lounges down every hall, which are very comfortable. The location of Jones is pretty inconvenient because it's so far away from everything. Additionally, the keys are so annoying and the building is just … old. Most people currently living in Jones did not rank Jones, including me. I would for sure live somewhere else, but I am thankful for the first-year experience living in Jones has provided me."
    <br> - Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2643-Medium.png", caption: "Double room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2642-Medium.png", caption: "Double room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2644-Medium.png", caption: "Lounge"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2645-Medium.png", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2646-Medium.png", caption: "Kitchenette"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2649-Medium.png", caption: "Dance studio"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2650-Medium.png", caption: "Practice room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2651-Medium.png", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2652-Medium.png", caption: "Common room"},
    ],

    allgender: "no",
    latitude: 42.0493805,
    longitude: -87.6749707,
  },
  {
    name: "Kemper Hall",
    address: "2420 Campus Dr",
    size: "165",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "yes",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 11,274",

    tech: "0.3 mi / 0.48 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    description: `Kemper is one the northernmost residences located right next to North Beach. 
    It has suites of six to eight people in singles or doubles and two bathrooms. It's one of a 
    few suite-style dorms on campus, so if you're looking for that, you may want to consider Kemper. 
    It houses the north-area package center, so you don't have to trek around campus in the winter getting your packages.
    <br><br>
    Kemper offers all-gender housing. Suites can be designated all-gender based on demand.
    `,
    testimonial: `
    "I like living in Kemper because everyone is very friendly, and I really like my suitemates."
    <br><br>
    "Kemper is great because we have our own bathroom!"
    <br><br>
    "I love living in Kemper because it's big, and we have a common room."
    <br><br>
    "Kemper is a chill place to live because you're able to hang out with friends in the suite living rooms. If you're lucky enough to have kitchens in your suite, you can also make tacos to your heart's content."
`,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/178231628_482403483174902_2108516350011077383_n---Teresa-Nowakowski.jpg", caption: "Suite common area"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/179034497_470835274135404_7419610441468611248_n---Teresa-Nowakowski.jpg", caption: "Suite bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/179133858_292579582370985_7610590012023605082_n---Teresa-Nowakowski.jpg", caption: "Kitchen"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/179321371_372737457321298_5137992091783211306_n---Teresa-Nowakowski.jpg", caption: "Suite common"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/179551841_166884845233877_2189626847327407486_n---Teresa-Nowakowski.jpg", caption: "Single room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Screen-Shot-2022-03-06-at-10.11.36-AM.png", caption: "Suite common area"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/Screen-Shot-2022-03-06-at-10.12.13-AM.png", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Screen-Shot-2022-03-06-at-10.10.59-AM.png", caption: "Dorm common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Screen-Shot-2022-03-06-at-10.11.11-AM.png", caption: "Dorm common room"},
    ],

    allgender: "yes",
    latitude: 42.061023,
    longitude: -87.674979,
  },
  {
    name: "Lindgren House",
    address: "2309 Sheridan Rd",
    size: "37",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "no",
    triples: "no",
    prices: "Single: 11,937",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.6 mi / 0.97 km",
    description: `Located in the fraternity quad, Lindgren houses less than 40 students, so it's
     one of the smaller residences on North Campus. It's kind of old (built in 1914) but it's been 
     updated a bit since then. There's a kitchen in the basement and a couple seating areas to study or host people.
    `,
    testimonial: `
    "It's pretty quiet, but everyone seems friendly and willing to talk about their experiences! I like the location of it (near Elder, Sarge, Tech, and SPAC), but it's a bit small for my liking. I would want to live in 2303 Sheridan, the GREEN House dorm. It is sustainability-themed and is super engaging!"
    <br>- Class of 2024
    <br><br>
    "It's like a post-apocalyptic frat house. Cons: gross bathrooms, thin walls (you can hear your neighbors' alarms), a dingy basement, tiny rooms, zero social life, no amenities in the lounge, only has two laundry machines. Pros: occasional basement parties." 
    <br>- Class of 2025
  `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/part0.JPG", caption: "Single dorm"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/part0-1-.JPG", caption: "Single dorm"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/part0-2-.JPG", caption: "Single dorm"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6072.jpg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6081.jpg", caption: "Hall"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6080.jpg", caption: "Basement"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6079.jpg", caption: "Laundry room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6078.jpg", caption: "Kitchen"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6077.jpg", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6076.jpg", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6074.jpg", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6073.jpg", caption: "Common room"},

    ],

    allgender: "no",
    latitude: 42.059585,
    longitude: -87.6764203,
  },
  {
    name: "North Mid-Quads (PARC)",
    address: "650 Emerson St",
    size: "88",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    description: `North Mid-Quads, also located in the sorority quad, has nice communal
     spaces for baking, studying and hanging out. It houses the Public Affairs Residential 
     College (PARC) and is designed in the exact same layout as South Mid-Quads (SMQ). You 
     can shoot pool, bake in the kitchen or use the white board to work out some late-night
      physics problems. The residential college hosts political presentations and discussions,
       and during the 2022 election cycle, it plans to hold watch parties for the presidential debates. 
    <br><br>
    Accessibility note: NMQ has a handful of dorm rooms on the ground floor but no elevator. 
    On the other floors there are only dorm rooms. Laundry and common spaces are all located 
    on the ground floor.
    <br><br>
    Famous alum: Rumor has it, Meghan Markle lived in NMQ!
    `,
    testimonial: `
    "People at NMQ are super friendly and sociable. They are always hanging around in the lounge or chatting in the hallways. The rooms, kitchen and lounge areas are all quite nice. The staircase smells sometimes, but other than that, there is nothing else I dislike. I would stay in NMQ!"
    <br>- Class of 2025
    <br><br>
    "NMQ is kind of small, but it's relaxing and familial. I would live here again!"
    <br>- Class of 2025
    <br><br>
    "I like the environment and the events hosted by the res college exec (especially the free food). It's in a decent location, and the facilities are pretty nice. I wish NMQ had an elevator though. The only place I'd maybe rather live is Kemper or Lincoln."
    <br>- Class of 2025
    <br><br>
    "It's a comfy and quaint dorm. I like the bathrooms, but I wish they had paper towels. Also the events that give free food are things to look forward to. I wouldn't mind living here again, but I would like to live in other dorms."
    <br>- Class of 2025
    <br><br>
    "It's alright. It is not very social, but it has really nice amenities, and the rooms are large. The bathrooms, kitchen and lounges are nice. I like the sorority quad, and it can get really pretty outside."
    <br>- Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-5562.jpg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_6266-Medium.png", caption: "Single room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_6267-Medium.png", caption: "Single room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_6257-Medium.png", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_6264-Medium.png", caption: "Study room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_6261-Medium.png", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_6260-Medium.png", caption: "Kitchen"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_6259-Medium.png", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_6258-Medium.png", caption: "Common room"},
    ],

    allgender: "no",
    latitude: 42.0518342,
    longitude: -87.6798217,
  },
  {
    name: "Rogers House",
    address: "647 University Pl",
    size: "49",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    description: `Rogers House is a small residential hall in the sorority quad close to downtown Evanston. It's known for having large rooms and cool architectural features. It's close to Allison and Plex, so you have your pick of dining options. Its size can be good for students who want a smaller dorm, but it is not known as the most social dorm on campus.
    `,
    testimonial: `
    "Rogers is a very homey, quiet dorm that can be social if you try. I like that it's so small, so there's never really any people around. The only major thing that I dislike is the washer/dryer situation, since it is a little hard to get laundry in. I'd choose Rogers again."
    <br> - Class of 2025
    <br><br>
    "It's not the most modern dorm, but it's nice and old-feeling in a cozy, vintage way. We have some warm, exposed wood in our room that I personally love. I also like how small it is. I know most of the people on my floor, and it feels more homey than some of the other dorms I've been in. I like the non-carpeted floors, the abundance of counter space in the bathrooms and the location! I don't love the shared laundry and kitchen space (I would definitely prefer a separate kitchen with natural lighting), the occasional bug problems and the lack of air conditioning."
    <br> - Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/image12.jpeg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/image9.jpeg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/image14.jpeg", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/image15.jpeg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/image13.jpeg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/image16.jpeg", caption: "laundry room"},
    ],

    allgender: "no",
    latitude: 42.0514227,
    longitude: -87.6793585,
  },
  {
    name: "Sargent Hall",
    address: "2245 Sheridan Rd",
    size: "157",
    type: "Hall",
    location: "North",
    dining: "yes",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 9,960",

    tech: "0.2 mi / 0.32 km",
    norris: "0.5 mi / 0.80 km",
    rock: "0.6 mi / 0.97 km",
    description: `Sargent is one of two North Campus residences with a dining hall in 
    the dorm (Elder is the other). Athletes frequent the dining hall because of its 
    proximity to SPAC. The dorm itself has a reputation for being a little dingy but fun, and it's
     close to other North Campus residences, so you're not far from your North Campus friends.
    `,
    testimonial: `
    "Sargent is a social place, but it feels a bit freshman-y. It's nice to have the dining hall, but it's pretty far from my South Campus classes."
    <br>- Class of 2024
    <br><br>
    "I think it's nice, especially because I lived in Bobb last year, so it feels like a step up. It has a lot of character. It doesn't feel soulless. It's nicer living in a corner room, there's two windows and more space. Sometimes the bathrooms are dirty, but every dorm is like that. It's nice to live above the dining hall, especially in the winter. It's nicer to have carpet than a hardwood floor."
    <br>- Class of 2024
    <br><br>
    "Best location on campus. Dining hall, SPAC, tech."
    <br>- Class of 2025
    <br><br>
    "I don't like how there's only one common room, and people party down there, so if I want a public place to study, Sarge is not it. No one's hangry around here. Everyone's well-fed, so they're happy."
    <br>- Class of 2024
    <br><br>
    "Part of the unique Sarge experience is taking a shower and still not feeling clean because nothing about Sarge ever really feels clean. It can be homey and cozy, but grimy and gross at the same time."
    <br>- Class of 2024
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Facetune_14-02-2022-19-13-50.jpg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Facetune_14-02-2022-19-15-23.jpg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7003.JPG", caption: "Laundry room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7005.JPG", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7006.JPG", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7007.JPG", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7008.JPG", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_7010.JPG", caption: "Kitchenette"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/B0614212-F116-4D35-AEED-698A838C706C_1_102_o.jpeg", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/C52F06CE-5DBE-4D3D-9B92-FA65CC10DDE5_1_102_o.jpeg", caption: "Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/BBB2143E-0CDE-448F-8143-F43554D6FBDE_1_102_o.jpeg", caption: "Bathroom"}, 
    ],

    allgender: "no",
    latitude: 42.0587738,
    longitude: -87.6755147,
  },
  {
    name: "Shepard Hall",
    address: "626 University Pl",
    size: "153",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    description: `
    Located directly across from Allison, Shepard is a modern dorm on South Campus with great amenities. The Shepard basement is open to all students, with private study spaces and incredible hanging egg chairs (!!) and common spaces for hanging out. The bathrooms are some of the nicest on campus. They also have hella common spaces open to residents only. You may even have a class or discussion section in the basement.
    <br><br>
    Accessibility note: Shepard has four floors and no elevator. 
    `,
    testimonial: `
    "I think the vibe of my dorm is very chill and quiet, especially my floor. It's not very social, but the people are nice and will say hi and stuff when you pass them walking. I like the cleanliness and how modern the bathrooms are. I like that there is a nice study room and lounge. I don't have any problem with the dorm itself, just wish it was a tad more social. The only place I would pick over my current dorm would be Lincoln, I honestly really like my dorm."
    <br> - Class of 2025
    <br><br>
    "I think this is one of the nicest dorms on campus. Really nice amenities and lots of daylight. Also that each floor has a study room and more study rooms in the basement. Amazing that there is laundry on each floor too. Shepard Hall definitely has a more relaxed and calm vibe than dorms on North Campus. Pretty good location since you're next to downtown Evanston and Allison dining hall. Most of the people are super nice and welcoming. It is much more social than I had thought, which was a plus. Although it is far from Tech and I am a STEM major, it is a great way to get to know downtown Evanston your first year."
    <br>- Class of 2025
    <br><br>
    "Building-wise, Shepard is beautiful: everything is fairly clean and new, and it's hard to feel disappointed by its ambience. It's a bit worse community-wise, though, since the residents generally stick to themselves / their friend groups and bonding events are basically nonexistent. It's hard to reach out and become close with other Shepard residents - especially later in the school year. The only candidate I would rank above Shepard would be Willard, as it shares both benefits of a nice ambience + a closer community."
    <br>- Class of 2025
    <br><br>
    "Neat and clean, modern, chill but maybe a little antisocial across floors. The facilities are great, and the entire dorm looks modern and renovated! I think having nice bathrooms really makes a difference for the whole "living on campus" experience. The rooms aren't huge, but it's more than enough space (it looks much smaller on the website than it does in person). If I had to nitpick, having microwaves on each floor would be really nice, as would an elevator when you're lugging suitcases up to the fourth floor."
    <br><br>
    "Everything is pretty clean, but it doesn't feel super social. People don't really hang out in the common areas in a casual way, but the people are nice. I like the location of Shepard and the bathrooms for sure. The basement is also super nice to have because there are a lot of nice facilities and study spaces down there. I don't like that it's a little antisocial and there isn't an elevator there, but honestly you get used to having to go up the stairs - coming from someone who lived on the fourth floor. It's definitely a great place to live - especially if South Campus is your vibe."
    <br> - Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/F14DC80D-9942-4A34-9776-0F4A8FB2D8BB---Jimmy-He.jpeg", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_1630.JPG", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_1632.JPG", caption: "Double room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_5241-Medium.png", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_5244-Medium.png", caption: "Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_5246-Medium.png", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_5247-Medium.png", caption: "Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_1495.JPG", caption: "Kitchen"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_1496.JPG", caption: "Kitchen"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_1497.JPG", caption: "Basement/common space"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_1499.JPG", caption: "Basement classroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_1502.JPG", caption: "Common space"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_1503.JPG", caption: "Common space"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_1505.JPG", caption: "Common space"}, 
    ],

    allgender: "no",
    latitude: 42.0508464,
    longitude: -87.6788743,
  },
  {
    name: "Slivka Hall",
    address: " 2332 Campus Dr",
    size: "140",
    type: "College",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 11,274",

    tech: "0.3 mi / 0.48 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    description: `Slivka is home to the Residential College of Science & Engineering. A bit of a nerdy vibe. 
    It has suite-style housing, which can foster pockets of community. It also houses Lisa's Cafe downstairs,
     which is fun for a late-night spot. Not the best meal exchange, but you can buy snacks and little treats there. 
     The second floor lounge offers study and hangout spaces, as well as a ping pong table.
    <br><br>
    Slivka offers all-gender housing. Suites of singles and doubles can be designated all-gender based on demand.
    `,
    testimonial: `
    "It's nerdy and pretty quiet except for events. The facilities are well-kept. I like the suite-style and lounges, good kitchens, but singles can be small. I'm definitely staying in Slivka."
    <br> - Class of 2025
    <br><br>
    "I really enjoy living in Slivka because I like the suites. I like the larger community too, but it's nice having the smaller community of a few suitemates. I get along well with them. We mostly use the suite to hang out. In the rec lounge there are usually the same people, so it's easy to get to know some of the people who live here, but you definitely can't get to know everyone because not all of them come to events. The vibe is super friendly and welcoming."
    <br> - Class of 2025
    <br><br>
    "Suites are always awesome, and it's above Lisa's which is a plus. The bedrooms themselves are a bit small, but the huge lounge and bathrooms make up for it. There's something going on every night: movies, game night, that kind of stuff."
    <br> - Class of 2023
    <br><br>
    "Slivka has a very distinct culture, and your enjoyment of it will really depend on how well you gel with it. Gaming, anime, tabletop gaming and general nerd culture was embraced there. There was almost always someone playing Smash or Guitar Hero in the rec lounge. Facilities-wise I have no complaints, but Slivka is pricey. One cool perk is that it has a music practice room in the basement. Overall I'd highly recommend living there since I've made some of my best friends living in Slivka."
    <br> - Class of 2022
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Single---Anonymous--2-.jpeg", caption: "Single room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Suite-Lounge---Will-He.jpg", caption: "Common Room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Laundry-room---Elijah-Esparza.jpeg", caption: "Laundry room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/Hallway-Kitchen--2-.jpg", caption: "Kitchenette"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Hallway-in-Basement--1-.JPG", caption: "Hall"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/Bathroom--2-.jpg", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/2nd-Floor-Lounge.jpg", caption: "2nd Floor Lounge"},
    ],

    allgender: "yes",
    latitude: 42.0604994,
    longitude: -87.6757217,
  },
  {
    name: "South Mid-Quads (Shepard Res)",
    address: "655 University Pl",
    size: "88",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    description: `
    South Mid-Quads (SMQ) is a vibrant non-thematic residential college located in the sorority 
    quad. It has the exact same layout as North Mid-Quads (NMQ). It houses Shepard Residential 
    College, not to be confused with Shepard Hall (if someone says Shepard they're probably referring 
    to Shepard Hall, not SMQ). The dorm hosts events often and has a reputation for being social. It 
    also has a ping pong table, foosball table and a kitchen. Its residents are proud to be called 
    Sheep. SMQ has an intramural sports rivalry with Willard.
    <br><br>
    Accessibility note: SMQ has a handful of dorm rooms on the ground floor but no elevator. On the 
    other floors there are only dorm rooms. Laundry and common spaces are all located on the ground floor.
    `,
    testimonial: `
    "Such a fun and engaging community! A diverse group of people and always so much going on. You can be as involved or uninvolved as you want, but even aside from events there are always people playing video games or studying downstairs, and everyone is so friendly! I like that so many people in the dorm make an effort to get to know others, and everyone is friendly and kind.
    I dislike that there are only three sets of washers and dryers for 75 people. I got randomly assigned to SMQ, but I'm so glad I did."
    <br> - Class of 2024
    <br><br>
    "SMQ is very social, community-based, supportive and fun. It's the kind of dorm where you can ask your neighbors for sugar and play Just Dance in the lounge. It's the best dorm on campus in my opinion. Super great location for people who want to live on South Campus. The sorority quad is beautiful. Being a res college, the weekly events are so fun and great for getting to know people. The only thing I dislike is the laundry machines because they don't work half the time. I did incredibly thorough research on dorms before doing the housing selection. SMQ seemed like the best option, and it absolutely still is."
    <br>- Class of 2025
    <br><br>
    "It's welcoming, quirky, close-knit and energetic. The community is really great - everyone is very friendly, and it's easy to meet people. There are multiple social events per week, which are very fun and bring people together. Logistically, it's easy for sophomores to get single rooms, provided they have enough points from events, and the bathrooms are nice too. I wouldn't want to live anywhere else! I only have good things to say about SMQ."
    <br> - Class of 2025
    <br><br>
    
    "I like the community atmosphere that comes in a res college and that everyone is really friendly. While I would say SMQ is very chill, it is not antisocial at all. Res colleges are definitely the move. Don't be worried about choosing a South Campus dorm if you're a STEM student. Tech to South Campus is not that far, and it's nice to get to meet a lot of new people who may not be in your classes."
    <br> - Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_1575---Quinn-Correa.JPG", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6155.jpg", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6160.jpg", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6157.jpg", caption: "Kitchen"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6159.jpg", caption: "Vender Machine and All-Gender Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6156.jpg", caption: "Common room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6158.jpg", caption: "Laundry Room"}
    ],

    allgender: "no",
    latitude: 42.0514089,
    longitude: -87.6797458,
  },
  {
    name: "West Fairchild (ISRC)",
    address: "1861 Sheridan Rd",
    size: "106",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.2 mi / 0.32 km",
    rock: "0.1 mi / 0.16 km",
    description: `West Fairchild, or the International Studies Residential College (ISRC), is the mirror of East Fairchild (CRC). 
    East and West Fairchild together are referred to as the "Fairchildren." The Fairchildren look down Hinman Avenue and are a 
    short walk from Kresge, the McCormick Foundation Center, Fisk and University Hall. According to ISRC's website, most of their 
    events have an international focus, such as weekly International Film Nights and multicultural munchies. But you don't have to
     be a political science major to live in ISRC!
    <br><br>
    According to residential services, roughly 18 students in singles and doubles will share two all-gender bathrooms.
    `,
    testimonial: `
    "I feel like the vibe is kind of like, we're working with what we have. And we've built up, at least on our floor, a pretty good community, despite the struggles. It's a great location. The exec board does a great job. There's lots of activities that you can engage in to help you get more involved, and you'll probably enjoy your experience here a little more."
    <br> - Class of 2025
    <br><br>
    "I feel like there's just two different vibes - there's energetic, 'Let's have fun, let's have conversation, let's talk all day type - and then there's just the side that's like 'Let me just relax in my room and enjoy some solitude.' So you have both, and you get to choose which one you want. Going to do the laundry if you live on the third floor is six flights of stairs. This building is old, it's a little bit run-down, it should be demolished, but it still exists, so taking that into consideration I think I would pass. It's the people who are great. The building itself? No."
    <br> - Class of 2025
    <br><br>
    "I think that West Fairchild is very friendly. There are four communal lounges on each floor, which is super amazing because any time during the week or on the weekends people will just be there studying or hanging out, and it's so easy to walk by and join in on a conversation. Everyones super nice and super fun to hang out with. I think that the executive board and the residential college really fosters friendship among residents, and you also get to do a lot of cool stuff as a residential college member outside of the dorm as well. There are a lot of fun trips you can go on that you're only privy to if you're a residential college member."
    <br> - Class of 2025
    <br><br>
    "Although West Fairchild has subpar living conditions, I really appreciate its location and its proximity to all of my classes, as well as dining halls, downtown Evanston and the Lakefill. I also really appreciate the residential college environment and the community that has been fostered throughout my time living here. Overall, I would say come here if you don't care about your living conditions and would like the convenience of classes and the tight-knit community of a res college."
    <br> - Class of 2023
    <br><br>
    "It's cute, people are chill, but also it's so old that it shouldn't have people living in it. It's leaky. I would rather live in one of the Shepards."
    <br> - Class of 2023`,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0413-Medium.png", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0414-Medium.png", caption: "Double room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0415-Medium.png", caption: "Double room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0416-Medium.png", caption: "Lounge"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0418-Medium.png", caption: "Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0419-Medium.png", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0420-Medium.png", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0421-Medium.png", caption: "Common room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0423-Medium.png", caption: "Study room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0424-Medium.png", caption: "Gym"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0426-Medium.png", caption: "Kitchenette"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_0427-Medium.png", caption: "Kitchenette"},
    ],
    allgender: "yes",
    latitude: 42.0510565,
    longitude: -87.6756823,
  },
  {
    name: "Willard Hall",
    address: "1865 Sherman Ave",
    size: "261",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    prices: "Single: 12,633; Double: 11,274",
    description:`
    Willard is nestled in the end of the sorority quad and houses the infamous Fran's, a late night haunt for students that serves quesadillas 
    and shakes. In the basement near Fran's is a lounge to hang with your friends, although be warned that students love to show off on the 
    grand piano there. Willard is a non-thematic residential college and has regular programming organized by the executive board, along with 
    a yearly formal. It has lots of common spaces, a kitchen on every floor and a gym in the basement. Willard has an intramural sports rivalry with SMQ.
    <br><br>
    Accessibility note: Willard has nine ADA accessible rooms on the first floor, along with an elevator that goes to all floors.
    <br><br>
    Willard offers all-gender housing for 12 students in a specific wing of the dorm, who will share one all-gender, community-style bathroom.
    <br><br>
    Famous alum: Julia Louis-Dreyfus, Seth Meyers, David Schwimmer, and Stephen Colbert lived in Willard!
`,
    testimonial: `It's the kind of place where you can say hi to people you pass by in the lounge and even sit down and study with them. I would live in an apartment if I didn't live in Willard because I wouldn't be able to find the same kind of community in any other dorm. 
    <br>- Jess Wu, Willard PR Chair, Class of 2024 <br><br>

    "What I like about Willard is how diverse the student population is and the events they host. Willard has some fun ones like their Firesides, High Tables and their Willard Formal. I definitely wouldn't live anywhere else!"
    <br>- Veronica Carmen, Class of 2023 <br><br>

    "It's really amazing to be a part of a dorm that's so united, and it's so easy to meet people because there are so many events that are held and people are always willing to talk when you say hi to them." 
    <br>- Anthony Kang, Class of 2024
    `,
    tech: "0.7 mi / 1.13 km",
    norris: "0.5 mi / 0.80 km",
    rock: "0.3 mi / 0.48 km",
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-4262.JPEG", caption: "Single room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-4266.JPEG", caption: "Single room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9135.JPG", caption: "Triple room"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9071.JPG", caption: "First floor lounge"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9073.JPG", caption: "Study room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9078.JPG", caption: "Kitchen"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9079.JPG", caption: "Fran's Cafe/first floor lounge"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9081.JPG", caption: "Fran's Cafe"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9082.JPG", caption: "Bathroom"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9083.JPG", caption: "Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9085.JPG", caption: "Bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9086.JPG", caption: "Kitchenette"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9088.JPG", caption: "Lounge"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9090.JPG", caption: "Lounge"}

    ],

    allgender: "yes",
    latitude: 42.0517582,
    longitude: -87.6810996,
  },
  {
    name: "1838 Chicago Ave",
    size: "120",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    address: "1838 Chicago Ave",
    tech: "0.5 mi / 0.80 km",
    norris: "0.3 mi / 0.48 km",
    rock: "0.1 mi / 0.16 km",
    doublePrice: "",
    singlePrice: "",
    description: `
    Located close to Allison's dining hall and Shepard's study spaces, 1838 is in an ideal location with good amenities. 
    It has a modern look, and it has a kitchen and a gym in the basement. It's just across the Sheridan crosswalk from the Arch, 
    and there's a small study space outside with swinging chairs that looks very homey and cute.
    <br><br>
    Accessibility note: 1838 has two ADA accessible rooms on the ground floor, according to current residents, but the elevator 
    only goes between the ground floor and the gym in the basement, not to other floors.
    `,
    testimonial: `
    "1838 Chicago is a very quiet dorm, making it the perfect place to sleep. I enjoy that I have a quiet space to come home to after hanging out with friends. If you're looking for a dorm with a social life, I would not recommend living here."
    <br>- Class of 2025
    <br><br>
    "1838 is definitely quiet, but I think people get the impression that quiet equals antisocial, which is not the case. Most of the time when I walk through the lobby there are people hanging out in the kitchen or hanging out on the couches in the lounge. I really like the amenities that come with the dorm. It's great that we have a gym and a full kitchen. It's also really nice to be so close to Allison and Shepard so that we can use the amenities in those buildings as well."
    <br>- Class of 2024
    <br><br>
    "It's good vibe in 1838. People definitely mind their business, but the atmosphere is social enough that it doesn't feel gloomy or isolating. I like the layout of the rooms, proximity to the dining hall, the gym, and the bathrooms. The lounges aren't great and don't welcome that much social hangout space. It is also possible that you can get stuck in a smaller double, and it does feel cramped at times, especially with the one small window."
    <br>- Class of 2024
    `,
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/Screen-Shot-2022-03-01-at-10.08.30-PM.png", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4513.png", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/Screen-Shot-2022-03-01-at-10.13.37-PM.png", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4487.png", caption: "Bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4489.png", caption: "Bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4493.png", caption: "Common Area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4501.png", caption: "Common area"},  
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4502.png", caption: "Common area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4504.png", caption: "Common area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4508.png", caption: "Common area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4510.png", caption: "Kitchen"}, ],

    allgender: "no",
    latitude: 42.050951,
    longitude: -87.677995,
  },
  {
    name: "636 Emerson",
    address: "636 Emerson",
    size: "37",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    description: `The site of a former sorority house, 636 Emerson has been converted into residential use
     beginning the 2021-22 school year. It was renovated prior to the 2021-22 year, but residents have reported
      some issues with the amenities. With a kitchen in the basement and close proximity to Plex, Allison and 
      Willard, 636 residents have lots of food options.
    `,
    testimonial: `
    "636 has charm! The vibes are good, I like the people here, and it's a super pretty building 
    from the outside. Our lounges are quite nice too. The location is nice (right between Plex and 
      Allison, so we've got our choice of dining hall), and it's really not a far walk from Tech, where 
      the majority of my classes have been. However, THIS DORM WAS NOT READY TO BE LIVED IN! The so-called 
      renovations were rushed. Some highlights are the bathroom flooding three times from the same place, 
      the radiators from HELL that thunk extremely loudly at all hours of the night and the front door to 
      the building malfunctioning twice. If not for those problems, 636 would be a decent dorm."
    <br> - Class of 2025
    <br><br>
    "It's very small, quiet and cozy. For people seeking a vibrant social scene, 636 probably 
    isn't the best option - but if you'd like a more solitary dorm experience, this is the way to go.
     I really like the common spaces in the dorm. The atmosphere is pretty homey, and it's nice to have a
      living room with a TV. Major downsides to this dorm are that it doesn't have AC and things are frequently
       breaking/flooding/otherwise in disrepair." 
    <br>- Class of 2024
    <br><br>
    "It's small and usually quiet. Likes: quiet, never have to wait to pee or shower. Dislikes: no AC, 
    no ventilation, have to go to the basement for the water fountain and laundry, showers are SO SMALL, 
    our bathroom ceiling leaks a ton."
    <br> - Class of 2025
    <br><br>
    "The view of the sorority quad from our window is beautiful, and it's pretty quiet. If there's ever a 
    problem, maintenance is very kind. 636 is not a party dorm. I have not been kept up by my neighbors ever. 
    It's one of the cheapest dorms to live in, which is nice. The rooms are decently large. And our washers/dryers 
    are brand new! However - the dorm is renovated in the most general sense. They stuck in some ugly modern furniture and 
    swept a bit, and that was it. Surprisingly, I have enjoyed my time at 636 Emerson. It's been a blast." 
    <br>- Class of 2024

    `,
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3245.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3246.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3244.jpg", caption: "Common area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3247.jpg", caption: "Bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3248.jpg", caption: "Bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3249.jpg", caption: "Bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3250.jpg", caption: "Common Area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3251.jpg", caption: "Common Area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3252.jpg", caption: "Common Area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3243.jpg", caption: "Kitchen"}],

    allgender: "no",
    latitude: 42.051917,
    longitude: -87.679059,
  },
  {
    name: "640 Emerson",
    address: "640 Emerson",
    size: "33",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    description: `Located in a back corner of the sorority quad, 640 Emerson is another converted 
    sorority house. The first floor has an open layout with couches, tables, a pool table and piano. 
    It's right across Emerson St. from Searle Health Center.
    `,
    testimonial: `
    "It's kinda close knit. The sophomores kinda stick to themselves. The bathrooms are nice, I think they just renovated. I haven't disliked much here. It's a bit small, so you don't see that many people."
    <br>- Class of 2025
    `,
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6038-2.jpg", caption: "Common area"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6040.jpg", caption: "Common area"},
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6041.jpg", caption: "All-gender bathroom"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6042.jpg", caption: "Laundry room"}, 
      {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6039.jpg", caption: "Common area"},],

    allgender: "no",
    latitude: 42.051918,
    longitude: -87.679442,
  },
  {
    name: "710 Emerson Ave",
    address: "710 Emerson Ave",
    size: "27",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.3 mi / 0.48 km",
    description: `Another former sorority house, 710 Emerson has open space on the ground 
    floor for congregating. It has couches for studying and hanging out, as well as a 
    fireplace that may or may not work. There is a small kitchen in the basement, along with laundry.
    `,
    testimonial: `
    "710 is pretty laid back, people just hanging out. It can get fairly social at times, especially on 
    the weekends. I like the quickness of going in and out and the pool table. I also like the common areas. 
    I don't love being on South Campus because it can be a bit of a trek north."
    <br>- Class of 2024
    `,
    images: [ 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6128.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6129.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6127.jpeg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6125.jpg", caption: "Laundry room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6123.jpg", caption: "Common area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6124.jpg", caption: "Kitchen"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6126.jpg", caption: "Common area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6117.jpg", caption: "Common area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6118.jpg", caption: "Common are"},],

    allgender: "no",
    latitude: 42.0518445,
    longitude: -87.6804867,
  },
  {
    name: "560 Lincoln St",
    address: "560 Lincoln St",
    size: "422",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "yes",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 11,274",

    tech: "0.4 mi / 0.64 km",
    norris: "0.7 mi / 1.13 km",
    rock: "0.8 mi / 1.29 km",
    description: `Lincoln is widely known as one the nicest dorms on campus. Beware students who 
    will be taking a lot of humanities classes because it's one of the northernmost dorms on Northwestern's 
    campus. Overlooking North Beach, Lincoln has suites instead of regular-style dorms, which means you have 
    your own bathroom with your suitemates. There are kitchens located throughout the building.
    <br><br>
    Lincoln offers all-gender housing. There is not a designated all-gender housing wing, and 
    suites will be designated as all-gender housing depending on demand.
    <br><br>
    Accessibility note: Lincoln has ADA accessible rooms, and the building has an elevator.
    `,
    testimonial: `
    "Pretty chill but not very tight because of how big it is. The single rooms are really small. 
    The amenities are nice (laundry on every floor). It is very far north which gets annoying when 
    you need to go to South Campus. Lincoln is a good place to live!"
    <br>- Class of 2023
    <br><br>
    "It's a good mix of social and isolated. Most people hang out in lounges or 
    have people over, as the suite style rooms enable hosting. Being at the north 
    end of campus can sometimes get tiring, especially during a quarter where all 
    of your classes are south. I really enjoy having an elevator, my own bathroom and a 
    kitchen on every floor. It's a super bright and clean dorm, which makes it feel homier."
    <br>- Class of 2025
    <br><br>
    "Love love love the amenities that come with Lincoln. The rooms are so nice, and 
    the bathroom area is so clean and nice and private! The nice kitchens and lounges 
    on each floor are also great for studying or watching a movie with friends! The on
    e thing about Lincoln is that the suite style is not conducive for making friends. 
    It's hard to meet people and befriend people on your floor. Lots of people I know in
     other dorms made most of their friends at first from where they lived, but that isn't 
     the case in Lincoln. Amenities > everything, you'll make your friends elsewhere anyway."
    <br>- Class of 2025
    <br><br>
    "It's chill, open, pretty quiet. I like the space, view, not having to leave the room to go to the bathroom/shower, 
    having suitemates, lounges, easy access to kitchens and laundry. There have been some problems with the fire alarm, 
    and it's the northernmost dorm (so kinda far from stuff)."
    <br>- Class of 2025
    `,
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_8400.JPEG", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln1.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln2.jpg", caption: "Suite common area"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln3.jpg", caption: "Suite bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln4.jpg", caption: "Suite bathroom"},],

    allgender: "yes",
    latitude: 42.061379,
    longitude: -87.675364,
  },
  {
    name: "1856 Orrington Ave",
    address: "1856 Orrington Ave",
    size: "26",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "no",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 9,960",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.3 mi / 0.48 km",
    description: `1856 Orrington is one of the smallest residences on campus with only 26 
    residents. Because it is a former sorority house, the room sizes vary. It has a kitchen 
    and lounge/study area, along with a pool table.
    `,
    testimonial: "No testimonials.",
    images: [ 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-4214.JPEG", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-4220.JPEG", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-4215.JPEG", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-4213.JPEG", caption: "Double room"}],

    allgender: "no",
    latitude: 42.05166275,
    longitude: 	-87.67915964,
  },
  // {
  //   name: "2303 Sheridan Rd (CCS)",
  //   address: "2303 Sheridan Rd",
  //   size: "40",
  //   type: "College",
  //   location: "North",
  //   dining: "no",
  //   firstyear: "yes",
  //   ac: "yes",
  //   suite: "no",
  //   elevator: "no",
  //   singles: "yes",
  //   doubles: "yes",
  //   triples: "yes",
  //   tech: "3",
  //   norris: "12",
  //   rock: "12",
  //   allgender: "yes",
  // },
  {
    name: "2303 Sheridan Rd (GREEN House/CCS)",
    address: "2303 Sheridan Rd",
    size: "40",
    type: "College",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.6 mi / 0.97 km",
    description: `Historians will say these two communities at 2303 Sheridan were friends. GREEN House, a special 
    interest residential hall focused on sustainability and CCS, the Cultural & Community Studies Residential 
    College share one North Campus building. It's close to Sargent Dining Hall, Mudd Library and Tech. Students from a 
    variety of majors with varied interests can find a home at this dorm nestled in the frat quad.
    <br><br>
    2303 Sheridan offers both singles and doubles for all-gender housing. Both CCS and GREEN House have 
    community-style all-gender bathrooms in the all-gender sections of the dorm, but students must opt-in
     to all-gender housing.
    <br><br>
    Accessibility note: 2303 used to be two buildings that were joined into one, so the basements aren't 
    connected. The kitchen is in one half of the basement, and laundry is in the other basement. An elevator 
    goes from the first floor to the kitchen, but not to the basement where there is laundry. Students who need 
    to use the elevator are not able to access the laundry room.
    `,
    testimonial: `
    "It is very community-centered and it feels homey. I like that I can come down to the lounge and there will be people in it. I don't like how much the lights in the lounge break. I like that it's clean, there's no mold in any of the showers, and it feels relatively new." 
    <br>- Class of 2024
    <br><br>
    "We are a small dorm with a big community. There are always events going on for CCS and GREEN House. I like that the nature of CCS and GREEN House both attract lots of open-minded people. Even though we are a res college, we have residents of all majors and from all over the world. Not the biggest fan of how long it takes to walk to the kitchen. I met so many amazing people through CCS and it has the best location on campus."
    <br>- Class of 2024
    <br><br>
    "Chill vibe. Super fun! Super tight-knit but welcoming community. CCS has the ability to bring in non-residents from all over. The most underrated dorm on north campus. I will say, I live on the fifth floor and there is no elevator. Other than that, I like that we have a lot of great amenities like lounges and basements to hang out in. We are close to Sargent and Elder dining halls, SPAC, Tech and Mudd."
    <br>- Class of 2025
    <br><br>
    "North campus's hidden gem, lively down-to-earth lounge community. There are great community events between GREEN House, RAs and CCS. GREEN House seems to be on the up and up. Water pressure in faucets is WEAK though."
    <br>- Class of 2023
    `,
    images: [ 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3009.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3011.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3012.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2982.jpg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2983.jpg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2984.jpg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2987.jpg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2989.jpg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2994.jpg", caption: "Basement"},  
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2995.jpg", caption: "Basement"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2996.jpg", caption: "Basement"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2997.jpg", caption: "Kitchen"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2999.jpg", caption: "Kitchen"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3001.jpg", caption: "kitchen"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3005.jpg", caption: "bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3007.jpg", caption: "bathroom"},],

    allgender: "yes",
    latitude: 42.059101,
    longitude: -87.676668,
  },
  {
    name: "2307 Sheridan Rd",
    address: "2307 Sheridan Rd",
    size: "32",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 10,581",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.6 mi / 0.97 km",
    description: `With fewer than 30 residents, 2307 Sheridan is one of the smallest residences on campus. 
    It has a piano, lounge and TV area. It's near both Elder and Sargent, so residents have easy access to 
    dining options. It's steps from the tennis courts and close to SPAC.
    `,
    testimonial: `
    "The thin walls are awful because it means hearing and smelling everything against your will. Best part is how few people mind their business and are usually mindful of the other people living there. 2307 would be better with air conditioning and different people living there, but we can't all choose our neighbors."
    <br> - Class of 2025
    <br><br>
    "It's small and quiet. All the rooms are singles and I like living in a single. There's no kitchen, but we have a microwave and a fridge. There's no AC which sucks, and it gets pretty hot during the not winter. We have a piano, which is cool. It's small so the people in the dorm are kinda close, it's a tighter-knit community."
    <br>- Class of 2025
    <br><br>
    "It's pretty chill. People kind of keep to themselves. Great location, it' s a pretty building with a cool staircase, small and quiet. It's not a particularly social dorm by virtue of only like 30 people living here this year, and it gets really hot in the early fall/late spring. I actually moved here from 1856 Orrington, and I like it a lot better."
    <br> - Class of 2024
    <br><br>
    "It's warm and welcoming. Many facilities need frequent maintenance. Too manys stairs without an elevator causes difficulties with moving in and out. The community is friendly, though. I would want to live somewhere else. 2307 was not in my list of preferred choices."
    <br> - Class of 2025
    <br><br>
    "2307 is close-knit, homey, cozy. Likes: good location, water fountain. Dislikes: no AC, no elevator, only two laundry machines, gross bathrooms. I'd rather live somewhere else."
    <br> - Class of 2025
    <br><br>
    "I like how cozy the common spaces are and its proximity to Sarge/Tech, dislike lack of AC. I probably wouldn't live somewhere else though."
    <br> - Class of 2024
`,
    images: [ 
    {img: "https://northbynorthwestern.com/content/images/2022/05/68EFA956-DC63-4EF6-ACC7-EDEA476CDB56.jpeg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/05063333-24CF-47A5-9CBC-551E43912E1C.jpeg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/A4DE90E1-D182-498D-A0E9-A24B9660A1CB.jpeg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/4E4877FD-49CD-474E-B5A0-5FD353931CF2.jpeg", caption: "Bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/8F0B0416-0169-4B80-BFCC-05D3379CA3EC.jpeg", caption: "Bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/400788C8-545A-4E63-82C9-78E409BA1BB2.jpeg", caption: "bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/786ECE72-0FAF-4211-AE48-12C35008D858.jpeg", caption: "Bathroom"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/40A60993-8B11-492E-8BB7-A710672E459C.jpeg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/0BD38018-2616-45BB-9327-56CB0804B890.jpeg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/518304D2-4577-4325-A07C-ACB091E93347.jpeg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/605387CB-2E28-4314-94C3-D4A1D11E7F40.jpeg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/B0EF3109-BC76-4F21-A446-44EE276C382E.jpeg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/D6C8D1DF-69AF-468D-889F-8E9115515540.jpeg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/8199C0F2-56DD-4FE2-BAFD-186CEA7E6E3A.jpeg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/AF1DC4B5-8C47-4BF2-AA23-E33D5CFEB562.jpeg", caption: "Laundry room"},],

    allgender: "no",
    latitude: 42.0596108,
    longitude: -87.6761629,
  },
  {
    name: "2347 Sheridan Rd",
    address: "2347 Sheridan Rd",
    size: "25",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "no",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 9,960",

    tech: "0.3 mi / 0.48 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    description: `This is just another one of those dorms located North Campus in the fraternity quad. It's 
    four floors without an elevator, which can sometimes be an issue with laundry on the first floor. It has 
    nice common areas and close proximity to North Campus amenities such as dining halls, SPAC and Mudd Library.`,
    testimonial: 
    `"It's chill, pretty quiet. The downstairs area could be used to hangout or for smaller parties, so that's cool. Everyone kinda keeps to themselves but is friendly when interacting. We have a good basement area, pool tables, fourth floor lounge is huge. The rooms are quiet and spacious, and they stay pretty cool most of the year. Laundry always breaks, and there are only two washers/dryers for the whole building. Cockroaches, house centipedes and spiders aren't a rare sight. No elevator (along with kitchen and laundry in basement) means a lot of going up and down flights of stairs. This place is nice, but I would've preferred living on the second floor so the stairs aren't an issue."
    <br> - Class of 2024
    <br><br>
    "People don't seem to be super social. It seems to be like you do your own thing, but the rooms are big, so that's nice. Insulation is not great. It's close to Tech and Elder. Lincoln is also nearby, which is nice."
    <br> - Class of 2024
    
    `,
    images: [ 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6066.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6065.jpg", caption: "Double room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6058.jpg", caption: "Common room"},
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6060.jpg", caption: "Common room"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6057.jpg", caption: "Common room"},
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6061.jpg", caption: "Kitchen"}, 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6062.jpg", caption: "Kitchen"},
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6063.jpg", caption: "Bathroom"},
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6070.jpg", caption: "Laundry room"},
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6071.jpg", caption: "Basement"},

  ],

    allgender: "no",
    latitude: 42.060801,
    longitude: -87.67614,
  },
  {
    name: "2349 Sheridan Rd",
    address: "2349 Sheridan Rd",
    size: "41",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "yes",
    elevator: "no",
    singles: "no",
    doubles: "yes",
    triples: "no",
    prices: "Double: 10,581",

    tech: "0.3 mi / 0.48 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    description: `The floorplan of 2349 is pretty unique. Two dorm rooms are joined by a small lounge 
    area between the two rooms with closets. Although the rooms are not joined by a bathroom like in 
    traditional suite-style housing, they are essentially suites. There is a kitchen in the basement, 
    and students can use the pool table and piano on the first floor.
    `,
    testimonial: "",
    images: [ 
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9666.jpeg", caption: "Double room"},
    {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_9724.jpeg", caption: "Hall"},],

    allgender: "no",
    latitude: 42.061053,
    longitude: -87.676167,
    
  },
  {
    name: "2313 Sheridan Rd",
    address: "2313 Sheridan Rd",
    size: "36",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "tba",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.6 mi / 0.97 km",
    description: `
    New dorm just dropped. It's a former fraternity house that is being converted into 
    general housing for the 2022-23 school year. It houses 36 students in singles and 
    doubles. Unfortunately, that's all we know.
    `,
    testimonial: "No testimonials.",
    images: [ 
      {img: "https://northbynorthwestern.com/content/images/2022/05/New-dorm--who-dis.png", caption: "We don't have photos at this time."},],

    allgender: "no",
    latitude: 42.059568,
    longitude: -87.676621,
  },
];

let latitude = 42.0566723;
let longitude = -87.6750685;
let mymap;
mymap = L.map("map").setView([latitude, longitude], 14);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibmF0aGFuaWFsdG8iLCJhIjoiY2t3OXcyemF2MmNwZzJvbXAwNTF2Njk5aSJ9.g5JkFBgSBUAFUELfSubtpg",
  }
).addTo(mymap);

const dorm_names = document.querySelector("#dorms");
const filters = document.querySelector("#filters");

const makeDorms = () => {
  let table_rows = document.createElement("tr");
  table_rows.innerHTML = `<th class="dorm-name">Hall</th> <th class="dorm-size">Size</th> <th class="dorm-type">Type</th>`;
  dorm_names.appendChild(table_rows);
  for (let i = 0; i < dorms.length; i++) {
    let marker = L.marker([dorms[i].latitude,  dorms[i].longitude]).addTo(mymap);
    marker.bindPopup(`<b>${dorms[i].name} - ${dorms[i].address}</b>`)

    let newItem = document.createElement("tr");
    newItem.className = `${dorms[i].name}`;
    newItem.innerHTML = `<td class="dorm-name" onclick="makePage(${[i]});">${
      dorms[i].name
    }</td> <td class="dorm-size">${dorms[i].size}</td> <td class="dorm-type">${
      dorms[i].type
    }</td>`;

    newItem.onmouseover = function(){
      marker.openPopup()
      .autoPan = "True";
      console.log(dorms[i].latitude);

      // mymap.flyTo([dorms[i].latitude,  dorms[i].longitude], 17);
  }

    dorm_names.appendChild(newItem);
  }
  let form = document.createElement("form");
  form.innerHTML = ``;

  filters.appendChild(form);
};
makeDorms();

const checkboxes = Object.values(
  document.querySelectorAll("input[type=checkbox]")
);

//get all currently checked filters
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () =>
    getCurrDormsByFilter(
      Object.values(document.querySelectorAll("input[type=checkbox]"))
        .filter((c) => c.checked)
        .map((c) => c.id)
    )
  );
});

function getCurrDormsByFilter(filterArr) {
  // console.log(filterArr);
  //clear classlist
  Object.values(document.querySelectorAll("tr")).map((d, i) => {
    if (i % 2 === 1) {
      d.style.backgroundColor = "rgb(114, 66, 175, 25%)";
    } else d.style.backgroundColor = "white";
  });

  const locationsCheck = filterArr.filter(
    (i) => i === "South" || i === "North"
  );

  const collegeCheck = filterArr.filter((i) => i === "Hall" || i === "College");

  const sizeCheck = filterArr.filter(
    (i) => i === "verysmall" || i === "small" || i === "medium" || i === "large"
  );

  const roomCheck = filterArr.filter(
    (i) => i === "singles" || i === "doubles" || i === "triples"
  );

  const filterDormsByLocation = (filterArr, dorm) => {
    return locationsCheck.length === 0
      ? true
      : (filterArr.includes("North") && dorm.location === "North") ||
          (filterArr.includes("South") && dorm.location === "South");
  };
  const filterDormsByType = (filterArr, dorm) => {
    return collegeCheck.length === 0
      ? true
      : (filterArr.includes("Hall") && dorm.type === "Hall") ||
          (filterArr.includes("College") && dorm.type === "College");
  };
  const filterDormsBySize = (filterArr, dorm) => {
    return sizeCheck.length === 0
      ? true
      : (filterArr.includes("verysmall") && dorm.size < 50) ||
          (filterArr.includes("small") && dorm.size === "<100") ||
          (filterArr.includes("small") &&
            dorm.size >= 50 &&
            dorm.size <= 100) ||
          (filterArr.includes("medium") &&
            dorm.size >= 101 &&
            dorm.size <= 200) ||
          (filterArr.includes("large") && dorm.size > 200);
  };

  const filterDormsByRoom = (filterArr, dorm) => {
    return roomCheck.length === 0
      ? true
      : (filterArr.includes("singles") && dorm.singles === "yes") ||
          (filterArr.includes("doubles") && dorm.doubles === "yes") ||
          (filterArr.includes("triples") && dorm.triples === "yes");
  };

  const filterDormsByGender = (filterArr, dorm) => {
    return filterArr.includes("all_gender") ? dorm.allgender == "yes" : true;
  };
  const filterDormsByDining = (filterArr, dorm) => {
    return filterArr.includes("dining_hall") ? dorm.dining === "yes" : true;
  };
  const filterDormsByFreshmen = (filterArr, dorm) => {
    return filterArr.includes("freshman") ? dorm.firstyear === "yes" : true;
  };
  const filterDormsByElevator = (filterArr, dorm) => {
    return filterArr.includes("elevator") ? dorm.elevator === "yes" : true;
  };
  const dormsFiltered = dorms
    .filter((dorm) => filterDormsByLocation(filterArr, dorm))
    .filter((dorm) => filterDormsByType(filterArr, dorm))
    .filter((dorm) => filterDormsBySize(filterArr, dorm))
    .filter((dorm) => filterDormsByGender(filterArr, dorm))
    .filter((dorm) => filterDormsByDining(filterArr, dorm))
    .filter((dorm) => filterDormsByFreshmen(filterArr, dorm))
    .filter((dorm) => filterDormsByElevator(filterArr, dorm))
    .filter((dorm) => filterDormsByRoom(filterArr, dorm))
    .map((d) => d.name);

  const dormSelection = Object.values(document.querySelectorAll("tr")).filter(
    (d) => dormsFiltered.includes(d.className)
  );

  for (let i = 0; i < dormSelection.length; i++) {
    dormSelection[i].style.backgroundColor = "#43e674";
  }
}

var count;
var images;
count = 0;
const currentImage = document.querySelector('#featured_image');
const currentCaption = document.querySelector('#featured_caption');


const makePage = (i) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  images = dorms[i].images;
  image_length = images.length;
  
  let content = document.querySelector("#content");
  content.innerHTML = "";
  content.innerHTML = `<h1 id="title">${dorms[i].name}</h1>
  <input id="back-button" type="button" value="< BACK" onClick="document.location.reload(true)">

  <div class="dorm-container">
    <div id="left">
      <h2>${dorms[i].address}</h2>
      <h4>${dorms[i].location}</h4>
      <h4>Residential ${dorms[i].type}</h4>
      <!-- <div id="map" style="height: 30vh; margin-top: 20px;"></div> -->
      <div id="features"><h3 id="filter-title">Features</h3>
      <p>Residents: <mark>${dorms[i].size}</mark></p>
      <p>Air Conditioning: <mark>${dorms[i].ac}</mark></p>

      <p>Walk to Norris: <mark>${dorms[i].norris}</mark></p>
      <p>Walk to Rock: <mark>${dorms[i].rock}</mark></p>
      <p>Walk to Tech: <mark>${dorms[i].tech}</mark></p>
      <p>Prices: <mark>${dorms[i].prices}</mark></p>
      <p>*Residential Services has yet to update the 2022-2023 dorm rates so prices were taken from 2021-2022 rates</p>
      </div>
    </div>

    <div id="right">
      <p>${dorms[i].description}</p>
      <br>
      <h3>WHAT RESIDENTS SAY</h3>
      <p>${dorms[i].testimonial}
      </p>
      <!-- preview panel -->
      <button class="prev" onclick="getPrevImage()">&lsaquo;</button>
      <button class="next" onclick="getNextImage()">&rsaquo;</button>
      <div id="featured_image" style="background-image: url('${images[0].img}');"></div>
      <div id="featured_caption"><p>${images[0].caption}</p></div>
      <!-- thumbnails -->
    </div>`;
};

function makeLocations() {
  for (i=0; i < dorms.length; i++){

      let marker = L.marker([dorms[i].latitude,  dorms[i].longitude]).addTo(mymap);
      marker.bindPopup(`<b>${dorms[i].name} - ${dorms[i].address}</b>`)
  } 
}

const getFirstImage = (term) => {
    
    currentImage.style.backgroundImage = createImage(images[1]);
    currentCaption.innerHTML += createCaption(images[1]);

}
const getNextImage = (term) => {
    const currentImage = document.querySelector('#featured_image');
    const currentCaption = document.querySelector('#featured_caption');

    console.log(count)
    if (count < image_length - 1)
        count += 1;
    else
        count = 0;
    currentImage.innerHTML = "";
    // caption.innerHTML = "";
    // set div background image to said image
    // currentImage.innerHTML += createImage(images[i]);
    currentImage.style.backgroundImage = createImage(images[count]); 
    currentCaption.innerHTML = createCaption(images[count]);
    console.log(images[count].img)
    
}

const getPrevImage = (term) => {
    const currentImage = document.querySelector('#featured_image');
    const currentCaption = document.querySelector('#featured_caption');

    if (count > 0)
        count -= 1;
    else
        count = (image_length - 1);
    currentImage.innerHTML = "";
    currentImage.style.backgroundImage = createImage(images[count]);  
    currentCaption.innerHTML = createCaption(images[count]);
  
}

const createImage = (data) => {

    return `url('${data.img}')`;

    };

const createCaption = (data) => {

    return `<p>${data.caption}</p>`;

    };
