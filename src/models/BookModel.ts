export type BookModel = {
  title: string
  description: string
  imgSrc?: string
  color: string
}

// $book-colors: #c8281cc2, #c3164f, #3f51b5, #2196f3, #009688, #4caf50, #ff9800, #c8380c;

export const placeholderBooks: BookModel[] = [
  {
    title: 'The Secret of the Perfumed Garden',
    description:
      "A gripping tale of love and betrayal. The story follows a young woman who falls in love with a man from a rival family. As their love grows, they must navigate the dangerous world of their families' feud. Will their love survive, or will it be torn apart by the forces that seek to keep them apart?",
    color: '#c8380c',
  },
  {
    title: 'The Curse of the Lost Pearls',
    description:
      'A heartwarming story of friendship and adventure. When a group of friends stumble upon a mysterious treasure map, they set out on a journey to find the lost pearls. Along the way, they face many challenges and obstacles, but their friendship and determination keep them going. Will they find the pearls, or will their journey end in failure?',
    imgSrc: 'https://via.placeholder.com/150',
    color: '#4caf50',
  },
  {
    title: 'The Last Hope of the Galaxy',
    description:
      'A chilling mystery that will keep you on the edge of your seat. When a group of astronauts set out on a mission to explore a distant planet, they discover a dark secret that threatens the entire galaxy. As they race against time to uncover the truth, they must also confront their own fears and weaknesses. Will they be able to save the galaxy, or will they succumb to the darkness?',
    color: '#c8281c',
  },
  {
    title: 'The Rise of the Holy Grail',
    description:
      "A hilarious romp through the world of high finance. When a young banker discovers a secret society that controls the world's financial markets, he must navigate a dangerous web of intrigue and deception. Along the way, he meets a cast of colorful characters, including a rogue trader, a corrupt politician, and a mysterious woman with a hidden agenda. Will he be able to outsmart them all, or will he become just another pawn in their game?",
    color: '#c3164f',
  },
  {
    title: 'The Quest for the Dark Lord',
    description:
      'A poignant exploration of the human condition. When a young hero sets out on a quest to defeat the dark lord, he discovers that the real enemy may be within himself. As he battles his own fears and doubts, he must also confront the darkness that threatens to consume him. Will he be able to overcome his own demons, or will he fall to the darkness?',
    imgSrc: 'https://via.placeholder.com/150',
    color: '#6b00bd',
  },
  {
    title: 'The Legend of the Haunted Time Traveler',
    description:
      'A thrilling adventure set in a post-apocalyptic world. When a time traveler from the future arrives in a world ravaged by war and disease, she must navigate a dangerous landscape filled with mutants, bandits, and other dangers. Along the way, she meets a group of survivors who are fighting to rebuild their world. Will she be able to help them, or will she become just another victim of the apocalypse?',
    imgSrc: 'https://via.placeholder.com/150',
    color: '#6b00bd',
  },
  {
    title: 'The Chronicles of the Dragon Rider',
    description:
      'A heart-wrenching story of loss and redemption. When a young dragon rider loses everything he holds dear, he must embark on a journey of self-discovery and redemption. Along the way, he meets a cast of characters who help him to find his way back to the light. Will he be able to overcome his own darkness, or will he be consumed by it?',
    color: '#c8380c',
  },
  {
    title: 'The Mystery of the Space Mansion',
    description:
      'A sweeping epic of war and politics. When a group of space explorers discover a mysterious mansion on a distant planet, they must navigate a dangerous web of intrigue and deception. Along the way, they meet a cast of characters who are fighting for control of the galaxy. Will they be able to uncover the truth, or will they become pawns in a larger game?',
    imgSrc: 'https://via.placeholder.com/150',
    color: '#3f51b5',
  },
  {
    title: 'The Adventures of the Chronically Ill Explorer',
    description:
      'A heart-pounding thriller that will leave you breathless. When a young explorer with a chronic illness sets out on a dangerous journey to find a cure, she must overcome her own limitations and the dangers of the wilderness. Along the way, she meets a cast of characters who help her to find the strength to keep going. Will she be able to find the cure, or will she succumb to her illness?',
    color: '#c8380c',
  },
  {
    title: 'The Enigma of the Ancient Artifact',
    description:
      'A thought-provoking exploration of the nature of reality. When a group of archaeologists discover an ancient artifact that seems to defy the laws of physics, they must confront the possibility that reality may not be what it seems. Along the way, they meet a cast of characters who challenge their assumptions about the world. Will they be able to unlock the secrets of the artifact, or will they be forever changed by what they discover?',
    color: '#009688',
  },
  {
    title: 'The Prophecy of the Chosen One',
    description:
      'A heartwarming tale of a young girl and her dog. When a young girl discovers that she is the chosen one who will save the world, she sets out on a journey of self-discovery and adventure. Along the way, she meets a cast of characters who help her to find the courage to face her destiny. Will she be able to save the world, or will she fail in her quest?',
    imgSrc: 'https://via.placeholder.com/150',
    color: '#c8281c',
  },
  {
    title: 'The Legacy of the Pirate King',
    description:
      'A gripping mystery set in the world of international espionage. When a young spy is sent to infiltrate a group of pirates, she discovers a conspiracy that threatens the entire world. Along the way, she meets a cast of characters who challenge her assumptions about right and wrong. Will she be able to stop the conspiracy, or will she become just another pawn in their game?',
    color: '#2196f3',
  },
  {
    title: 'The Saga of the Fast and the Furious Tokyo Drift',
    description:
      'A sweeping historical epic that spans generations. When a young street racer is sent to Tokyo to learn the art of drifting, he discovers a world of danger and intrigue. Along the way, he meets a cast of characters who challenge his assumptions about what it means to be a racer. Will he be able to master the art of drifting, or will he crash and burn?',
    color: '#3f51b5',
  },
  // {
  //   title: 'The Saga of the Fast and the Furious Tokyo Drift',
  //   description:
  //     'A sweeping historical epic that spans generations. When a young street racer is sent to Tokyo to learn the art of drifting, he discovers a world of danger and intrigue. Along the way, he meets a cast of characters who challenge his assumptions about what it means to be a racer. Will he be able to master the art of drifting, or will he crash and burn?',
  //   color: '#3f51b5',
  // },
  // {
  //   title: 'The Saga of the Fast and the Furious Tokyo Drift',
  //   description:
  //     'A sweeping historical epic that spans generations. When a young street racer is sent to Tokyo to learn the art of drifting, he discovers a world of danger and intrigue. Along the way, he meets a cast of characters who challenge his assumptions about what it means to be a racer. Will he be able to master the art of drifting, or will he crash and burn?',
  //   color: '#3f51b5',
  // },
  // {
  //   title: 'The Saga of the Fast and the Furious Tokyo Drift',
  //   description:
  //     'A sweeping historical epic that spans generations. When a young street racer is sent to Tokyo to learn the art of drifting, he discovers a world of danger and intrigue. Along the way, he meets a cast of characters who challenge his assumptions about what it means to be a racer. Will he be able to master the art of drifting, or will he crash and burn?',
  //   color: '#3f51b5',
  // },
]
