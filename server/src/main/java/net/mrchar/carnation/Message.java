package net.mrchar.carnation;

import java.time.ZonedDateTime;
import java.util.UUID;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class Message {
  private UUID id;
  private String from;
  private String to;
  private String content;
  private String state;
  private ZonedDateTime sendTime;
  private ZonedDateTime receiveTime;
}
