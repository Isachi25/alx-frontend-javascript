// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: string; // Unique identifier for MajorCredits
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: string; // Unique identifier for MinorCredits
}

// Create a function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand,
  };
}

// Create a function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject2.brand,
  };
}
