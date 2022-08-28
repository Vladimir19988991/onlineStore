import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist',

      srcFolder = './src';



export const path = {

   build:{
      filles: `${buildFolder}/files/`
   },

   src:{
      filles: `${srcFolder}/files/**/*.*`
   },

   watch:{},
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder:srcFolder,
   rootFolder:rootFolder,
   ftp:'',

}

