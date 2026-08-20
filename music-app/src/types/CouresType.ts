
export interface Course {
      id: number;
      title: string,
      slug: string,
      description: string,
      price: number,
      instructor: string,
      isFeatured: boolean,
      image: string,
      lessons: number,
      topics: [string],
      createdDate: Date,
      lastUpdate: Date,
      level: string,
      rating: number,
      numberOfEnrolled: number
}