import styled from 'styled-components';
import PersonalInfo from '../../components/personalInfo/personalInfo';
import HardSkills from '../../components/skills/hardSkills';
import AbilitiesAndInventory from '../../components/Abilities and Inventory';

export default function CharacterSheet() {
  return (
    <CharacterSheetLayout>
      <AbilitiesAndInfoSection>
        <PersonalInfo />
        <AbilitiesAndInventory />
      </AbilitiesAndInfoSection>
      <DescriptionAndClassesSection>
        <div>abcd</div>
        <div>abcd</div>
        <div>abcd</div>
        <div>abcd</div>
      </DescriptionAndClassesSection>
      <SkillsSection>
        <HardSkills />
        <HardSkills />
        <HardSkills />
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
`;

const DescriptionAndClassesSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 4fr 4fr;
`;