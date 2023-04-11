import styled from 'styled-components';
import PersonalInfo from '../../components/personalInfo/personalInfo';
import HardSkills from '../../components/skills/hardSkills';
import AbilitiesAndInventory from '../../components/Abilities and Inventory';
import SoftSkills from '../../components/skills/softSkills';
import Journal from '../../components/Journal';
import Level from '../../components/Description and Classes/level';
import Description from '../../components/Description and Classes/description';
import Classes from '../../components/Description and Classes/classes';
import Proficiencies from '../../components/Description and Classes/proficiencies';

export default function CharacterSheet() {
  return (
    <CharacterSheetLayout>
      <AbilitiesAndInfoSection>
        <PersonalInfo />
        <AbilitiesAndInventory />
      </AbilitiesAndInfoSection>
      <DescriptionAndClassesSection>
        <Level/>
        <Description/>
        <Classes/>
        <Proficiencies/>
      </DescriptionAndClassesSection>
      <SkillsSection>
        <HardSkills />
        <SoftSkills />
        <Journal />
      </SkillsSection>
    </CharacterSheetLayout>
  )
}

const CharacterSheetLayout = styled.div`
  height: 100vh;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 2fr;
  padding: 1em;
`;

const SkillsSection = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: 1fr 1fr 1fr;
`;

const AbilitiesAndInfoSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr;
  gap: 0.5em;
`;

const DescriptionAndClassesSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 4fr 4fr;
  gap: 0.5em;
  margin-right: 3em;
`;