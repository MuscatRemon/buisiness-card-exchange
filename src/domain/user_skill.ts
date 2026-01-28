export class UserSkill {
  id: number;
  user_id: string;
  skill_id: number;

  constructor(id: number, user_id: string, skill_id: number) {
    this.id = id;
    this.user_id = user_id;
    this.skill_id = skill_id;
  }
}
