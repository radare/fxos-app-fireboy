
var gbRunInterval;
var gbFpsInterval;

function gb_Frame() {
  gbEndFrame=false;
  while (!(gbEndFrame||gbPause)) {
    if (!gbHalt) {
      var p = MEMR(PC++);
      if (typeof (OP[p]) == "function")
        OP[p](); 
     } else gbCPUTicks=4;
    if (gbIME) gbInterrupts[gbRegIE & gbRegIF]();
    gb_TIMER_Control();
    if (gbIsBreakpoint) if (gbBreakpointsList.indexOf(PC)>=0) {
      gb_Pause();
      gb_Toggle_Debugger(true);
    }  
  }
}

function gb_Step(){
  if (!gbHalt) OP[MEMR(PC++)](); else gbCPUTicks=4;
  if (gbIME) gbInterrupts[gbRegIE & gbRegIF]();
  gb_TIMER_Control();
  gb_Dump_All();
}

function gb_Run() {
  if (!gbPause) return;
  gbPause=false;
  gbFpsInterval=setInterval(gb_Show_Fps,1000);
  gbRunInterval=setInterval(gb_Frame,16);
}

function gb_Pause() {
  if (gbPause) return;
  gbPause=true;
  clearInterval(gbRunInterval);
  clearInterval(gbFpsInterval);
  gb_Dump_All();        
}

function gb_Insert_Cartridge(fileName, Start) {
  gb_Pause();
  gbSeconds = 0;
  gbFrames  = 0;
  gb_Init_Debugger();
  gb_Init_Memory();
  gb_Init_LCD();
  gb_Init_Interrupts();
  gb_Init_CPU();
  gb_Init_Input();
  //gb_ROM_Load('roms/'+fileName);
  gb_ROM_Load(fileName);
  gb_Dump_All();
gb_Run();
}

