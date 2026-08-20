
export default interface Course {
      id: number;
      title: string,
      slug: string,
      description: string,
      price: number,
      instructor: string,
      isFeatured: boolean,
      image: string,
      lessons: number,
      topics: string[],
      createdDate: string,
      lastUpdate: string,
      level: string,
      rating: number,
      numberOfEnrolled: number
}
