import { useEffect, useState } from "react";
import { personalityTemplate, PersonalityTrait } from "../types/Personality";
import { getRandomInt } from "../helpers/HelperFunctions";

const Personality = () => {
  const [personality, setPersonality] = useState<PersonalityTrait[]>([
    ...JSON.parse(JSON.stringify(personalityTemplate)),
  ]);

  const randomizePersonalityPoints = () => {
    let minimumPersonalityPoints: number = 25;

    setPersonality((pers) => {
      return pers.map((p, i) => {
        if (minimumPersonalityPoints <= 0) {
          p.points = 0;
          return p;
        }
        const randomInt = getRandomInt(0, 11);
        if (randomInt >= minimumPersonalityPoints) {
          p.points = minimumPersonalityPoints;
        } else {
          p.points = randomInt;
        }
        minimumPersonalityPoints -= randomInt;
        return p;
      });
    });
    if (minimumPersonalityPoints > 0) {
      console.log("Emergency assign, points left");

      const leastPoints = personality.reduce((acc, loc, i) =>
        acc.points < loc.points ? acc : loc
      );
      const indexOfLeast = personality.findIndex(
        (p) => p.name == leastPoints.name
      );
      setPersonality((pers) => {
        return pers.map((p, i) => {
          console.log("DOINT");

          if (i == indexOfLeast) {
            p.points += minimumPersonalityPoints;
            console.log(p, "PINTS AFTER RE-ADDING");
          }
          return p;
        });
      });
    }
  };

  useEffect(() => {
    console.log(personality);
  }, [personality]);

  useEffect(() => {
    randomizePersonalityPoints();
  }, []);

  return (
    <div>
      <h2>Personality</h2>
      <table>
        <tbody>
          {personality.map((p) => {
            return (
              <tr key={p.name}>
                <td>{p.name}</td>
                <td>{p.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Personality;
