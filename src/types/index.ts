export interface ProjectDataType {
  id: 1;
  title: string;
  description: string;
  image: string;
  tag: string;
  gitUrl: string;
  previewUrl: string;
}



export interface SkillDataType {
  data:{
    skill_name: string,
    Image: string,
    width: number,
    height: number,  
  }[],
  data2:{
    skill_name: string,
    Image: string,
    width: number,
    height: number,  
  }[]
}

